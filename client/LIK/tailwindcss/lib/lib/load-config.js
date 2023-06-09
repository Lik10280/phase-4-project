"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "loadConfig", {
    enumerable: true,
    get: ()=>loadConfig
});
const _jiti = /*#__PURE__*/ _interopRequireDefault(require("jiti"));
const _sucrase = require("sucrase");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let jiti = null;
function lazyJiti() {
    return jiti !== null && jiti !== void 0 ? jiti : jiti = (0, _jiti.default)(__filename, {
        interopDefault: true,
        transform: (opts)=>{
            return (0, _sucrase.transform)(opts.source, {
                transforms: [
                    "typescript",
                    "imports"
                ]
            });
        }
    });
}
function loadConfig(path) {
    try {
        return path ? require(path) : {};
    } catch  {
        return lazyJiti()(path);
    }
}
