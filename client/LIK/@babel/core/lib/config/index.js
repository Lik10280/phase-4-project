"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfigItem = createConfigItem;
exports.createConfigItemSync = exports.createConfigItemAsync = void 0;
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _full.default;
  }
});
exports.loadPartialConfigSync = exports.loadPartialConfigAsync = exports.loadPartialConfig = exports.loadOptionsSync = exports.loadOptionsAsync = exports.loadOptions = void 0;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _full = require("./full");
var _partial = require("./partial");
var _item = require("./item");
const loadOptionsRunner = _gensync()(function* (opts) {
  var _config$options;
  const config = yield* (0, _full.default)(opts);
  return (_config$options = config == null ? void 0 : config.options) != null ? _config$options : null;
});
const createConfigItemRunner = _gensync()(_item.createConfigItem);
const maybeErrback = runner => (argOrCallback, maybeCallback) => {
  let arg;
  let callback;
  if (maybeCallback === undefined && typeof argOrCallback === "function") {
    callback = argOrCallback;
    arg = undefined;
  } else {
    callback = maybeCallback;
    arg = argOrCallback;
  }
  if (!callback) {
    return runner.sync(arg);
  }
  runner.errback(arg, callback);
};
const loadPartialConfig = maybeErrback(_partial.loadPartialConfig);
exports.loadPartialConfig = loadPartialConfig;
const loadPartialConfigSync = _partial.loadPartialConfig.sync;
exports.loadPartialConfigSync = loadPartialConfigSync;
const loadPartialConfigAsync = _partial.loadPartialConfig.async;
exports.loadPartialConfigAsync = loadPartialConfigAsync;
const loadOptions = maybeErrback(loadOptionsRunner);
exports.loadOptions = loadOptions;
const loadOptionsSync = loadOptionsRunner.sync;
exports.loadOptionsSync = loadOptionsSync;
const loadOptionsAsync = loadOptionsRunner.async;
exports.loadOptionsAsync = loadOptionsAsync;
const createConfigItemSync = createConfigItemRunner.sync;
exports.createConfigItemSync = createConfigItemSync;
const createConfigItemAsync = createConfigItemRunner.async;
exports.createConfigItemAsync = createConfigItemAsync;
function createConfigItem(target, options, callback) {
  if (callback !== undefined) {
    createConfigItemRunner.errback(target, options, callback);
  } else if (typeof options === "function") {
    createConfigItemRunner.errback(target, undefined, callback);
  } else {
    return createConfigItemRunner.sync(target, options);
  }
}
0 && 0;

//# sourceMappingURL=index.js.map
