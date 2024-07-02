/**
 * Load script and return load status as Promise
 *
 * @param name
 * @param src
 * @param defer
 * @returns {Promise<unknown>}
 */
function load(name, src) {
  var defer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var async = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (typeof document === "undefined") {
    return Promise.reject(new Error("No document element"));
  }

  var scriptElement = new Promise(function (resolve, reject) {
    var head = document.head || document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.defer = defer;
    script.async = async;

    script.onload = function () {
      resolve(window[name]);
    };

    script.onerror = function () {
      reject();
    };

    head.appendChild(script);
    script.src = src;
  });
  return scriptElement;
}
var isBrowser = function isBrowser() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  return true;
};

/* eslint-disable no-unused-vars */
var getDefaultOptions = function getDefaultOptions() {
  return {
    bootstrap: true,
    onReady: function onReady() {
      return {};
    },
    onError: function onError() {
      return {};
    },
    customResourceURL: "https://connect.facebook.net/en_US/fbevents.js",
    customNoscriptURL: "https://www.facebook.com/tr",
    deferScriptLoad: false,
    enabled: true,
    disableScriptLoad: false,
    appName: "",
    globalObjectName: "fbq",
    config: {
      id: ""
    }
  };
};
var options = getDefaultOptions();
var setOptions = function setOptions(_options) {
  options = Object.assign({}, getDefaultOptions(), _options);
};
var getOptions = function getOptions() {
  return options;
};

var assignGlobalProperty = function assignGlobalProperty(id, value) {
  if (!isBrowser()) {
    return;
  }

  window["fbq-disable-".concat(id)] = value;
};

var disable = (function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var _getOptions = getOptions(),
      config = _getOptions.config;

  assignGlobalProperty(config.id, value);
});

var query = (function () {
  var _window;

  var _getOptions = getOptions(),
      globalObjectName = _getOptions.globalObjectName;

  if (!isBrowser() || typeof window[globalObjectName] === "undefined") {
    return;
  }

  (_window = window)[globalObjectName].apply(_window, arguments);
});

var event = (function (verb, object) {
  query(verb, object);
});

var initialize = (function (id) {
  var _getOptions = getOptions(),
      config = _getOptions.config;

  if (!isBrowser()) {
    return;
  }

  event("init", id || config.id);
});

var track = (function () {
  if (!isBrowser()) {
    return;
  }

  event("track", "PageView");
});

/**
 * @deprecated done from bootstrapping to unify api with vue-gtag
 */

var optIn = (function () {
  disable(false); // spawn initial events:
  // fbq('init', 'ID');
  // fbq('track', 'PageView');

  initialize();
  track();
});

var optOut = (function () {
  disable(true);
});

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  disable: disable,
  event: event,
  initialize: initialize,
  optIn: optIn,
  optOut: optOut,
  track: track,
  query: query
});

var attachApi = function attachApi(Vue) {
  return Vue.prototype.$fbq = api;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
var registerGlobals = (function () {
  if (!isBrowser()) {
    return;
  }

  var _getOptions = getOptions(),
      globalObjectName = _getOptions.globalObjectName;

  if (window[globalObjectName]) {
    // already loaded
    return;
  }

  var fbq = function fbq() {
    var _fbq$queue;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    fbq.callMethod ? fbq.callMethod.apply(fbq, args) : (_fbq$queue = fbq.queue).push.apply(_fbq$queue, args);
  };

  if (!window["_" + globalObjectName]) {
    window["_" + globalObjectName] = fbq;
  }

  window[globalObjectName] = Object.assign(fbq, {
    loaded: true,
    version: "2.0",
    queue: [],
    push: fbq
  });
  return window[globalObjectName];
});

function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
}

function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

var bootstrap = _async(function () {
  var _getOptions = getOptions(),
      onReady = _getOptions.onReady,
      onError = _getOptions.onError,
      globalObjectName = _getOptions.globalObjectName,
      customResourceURL = _getOptions.customResourceURL,
      deferScriptLoad = _getOptions.deferScriptLoad,
      disableScriptLoad = _getOptions.disableScriptLoad;

  registerGlobals();

  if (disableScriptLoad) {
    return;
  }

  return _catch(function () {
    // by default, load script asynchronously
    return _await(load(globalObjectName, customResourceURL, deferScriptLoad, true), function () {
      // loadNoscript(customNoscriptURL, config.id);
      if (onReady) {
        onReady(window[globalObjectName]);
      }

      initialize();
      track();
    });
  }, function (err) {
    if (onError) {
      onError(err);
    } else {
      throw err;
    }
  });
});

var install = function install(Vue, options) {
  attachApi(Vue);
  setOptions(options);

  if (getOptions().bootstrap) {
    bootstrap();
  }
};

var noscript = function noscript(id) {
  var src = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "https://www.facebook.com/tr";
  var noscript = document.createElement("noscript");
  var img = document.createElement("img");
  img.height = 1;
  img.width = 1;
  img.src = "".concat(src, "?id=").concat(id, "&ev=PageView&noscript=1");
  img.style.display = "none";
  noscript.appendChild(img);
  return noscript;
};

export { bootstrap, install as default, disable, event, initialize, install, noscript, optIn, optOut, query, setOptions, track };
