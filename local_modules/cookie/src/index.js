'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

/**
 * Load script and return load status as Promise
 *
 * @param name
 * @param src
 * @param defer
 * @returns {Promise<unknown>}
 */
function load(name, src) {
  const defer =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true
  const async =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true

  if (typeof document === 'undefined') {
    return Promise.reject(new Error('No document element'))
  }

  const scriptElement = new Promise(function (resolve, reject) {
    const head = document.head || document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    script.defer = defer
    script.async = async

    script.onload = function () {
      resolve(window[name])
    }

    script.onerror = function () {
      reject(new Error('error'))
    }

    head.appendChild(script)
    script.src = src
  })
  return scriptElement
}
const isBrowser = function isBrowser() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false
  }

  return true
}

/* eslint-disable no-unused-vars */
const getDefaultOptions = function getDefaultOptions() {
  return {
    bootstrap: true,
    onReady: function onReady() {
      return {}
    },
    onError: function onError() {
      return {}
    },
    customResourceURL: 'https://connect.facebook.net/en_US/fbevents.js',
    customNoscriptURL: 'https://www.facebook.com/tr',
    deferScriptLoad: false,
    enabled: true,
    disableScriptLoad: false,
    appName: '',
    globalObjectName: 'fbq',
    config: {
      id: '',
    },
  }
}
let options = getDefaultOptions()
const setOptions = function setOptions(_options) {
  options = Object.assign({}, getDefaultOptions(), _options)
}
const getOptions = function getOptions() {
  return options
}

const assignGlobalProperty = function assignGlobalProperty(id, value) {
  if (!isBrowser()) {
    return
  }

  window['fbq-disable-'.concat(id)] = value
}

const disable = function () {
  const value =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true

  const _getOptions = getOptions()
  const config = _getOptions.config

  assignGlobalProperty(config.id, value)
}

const query = function () {
  let _window

  const _getOptions = getOptions()
  const globalObjectName = _getOptions.globalObjectName

  if (!isBrowser() || typeof window[globalObjectName] === 'undefined') {
    return
  }

  ;(_window = window)[globalObjectName].apply(_window, arguments)
}

const event = function (verb, object) {
  query(verb, object)
}

const initialize = function (id) {
  const _getOptions = getOptions()
  const config = _getOptions.config

  if (!isBrowser()) {
    return
  }

  event('init', '461821889829288')
}

const track = function () {
  if (!isBrowser()) {
    return
  }

  event('track', 'PageView')
}

/**
 * @deprecated done from bootstrapping to unify api with vue-gtag
 */

const optIn = function () {
  disable(false) // spawn initial events:
  // fbq('init', '461821889829288')
  // fbq('track', 'PageView')

  initialize()
  track()
}

const optOut = function () {
  disable(true)
}

const api = /* #__PURE__ */ Object.freeze({
  __proto__: null,
  disable,
  event,
  initialize,
  optIn,
  optOut,
  track,
  query,
})

const attachApi = function attachApi(Vue) {
  return (Vue.prototype.$fbq = api)
}

const registerGlobals = function () {
  if (!isBrowser()) {
    return
  }

  const _getOptions = getOptions()
  const globalObjectName = _getOptions.globalObjectName

  if (window[globalObjectName]) {
    // already loaded
    return
  }

  const fbq = function fbq() {
    let _fbq$queue

    const _len = arguments.length
    const args = new Array(_len)

    for (let _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key]
    }

    fbq.callMethod
      ? fbq.callMethod.apply(fbq, args)
      : (_fbq$queue = fbq.queue).push.apply(_fbq$queue, args)
  }

  if (!window['_' + globalObjectName]) {
    window['_' + globalObjectName] = fbq
  }

  window[globalObjectName] = Object.assign(fbq, {
    loaded: true,
    version: '2.0',
    queue: [],
    push: fbq,
  })
  return window[globalObjectName]
}

function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value
  }

  if (!value || !value.then) {
    value = Promise.resolve(value)
  }

  return then ? value.then(then) : value
}

function _catch(body, recover) {
  try {
    const result = body()
    if (result && result.then) {
      return result.then(undefined, recover)
    }
    return result
  } catch (e) {
    return recover(e)
  }
}

function _async(f) {
  return function () {
    const args = []
    for (let i = 0; i < arguments.length; i++) {
      args[i] = arguments[i]
    }

    try {
      return Promise.resolve(f.apply(this, args))
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

const bootstrap = _async(function () {
  const _getOptions = getOptions()
  const onReady = _getOptions.onReady
  const onError = _getOptions.onError
  const globalObjectName = _getOptions.globalObjectName
  const customResourceURL = _getOptions.customResourceURL
  const deferScriptLoad = _getOptions.deferScriptLoad
  const disableScriptLoad = _getOptions.disableScriptLoad

  registerGlobals()

  if (disableScriptLoad) {
    return
  }

  return _catch(
    function () {
      // by default, load script asynchronously
      return _await(
        load(globalObjectName, customResourceURL, deferScriptLoad, true),
        function () {
          // loadNoscript(customNoscriptURL, config.id);
          if (onReady) {
            onReady(window[globalObjectName])
          }

          initialize()
          track()
        }
      )
    },
    function (err) {
      if (onError) {
        onError(err)
      } else {
        throw err
      }
    }
  )
})

const install = function install(Vue, options) {
  attachApi(Vue)
  setOptions(options)

  if (getOptions().bootstrap) {
    bootstrap()
  }
}

const noscript = function noscript(id) {
  const src =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : 'https://www.facebook.com/tr'
  const noscript = document.createElement('noscript')
  const img = document.createElement('img')
  img.height = 1
  img.width = 1
  img.src = ''
    .concat(src, '?id=')
    .concat('461821889829288', '&ev=PageView&noscript=1')
  img.style.display = 'none'
  noscript.appendChild(img)
  return noscript
}

exports.bootstrap = bootstrap
exports.default = install
exports.disable = disable
exports.event = event
exports.initialize = initialize
exports.install = install
exports.noscript = noscript
exports.optIn = optIn
exports.optOut = optOut
exports.query = query
exports.setOptions = setOptions
exports.track = track
