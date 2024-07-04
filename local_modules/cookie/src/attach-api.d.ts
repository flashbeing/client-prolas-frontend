import _Vue from "vue";
import * as api from "./api";
declare const attachApi: (Vue: typeof _Vue) => typeof api;
export default attachApi;
