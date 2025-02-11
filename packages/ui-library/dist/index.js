"use strict";
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var index_exports = {};
__export(index_exports, {
    Button: function() {
        return Button;
    }
});
module.exports = __toCommonJS(index_exports);
// src/Button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = function(param) {
    var _param_variant = param.variant, variant = _param_variant === void 0 ? "primary" : _param_variant, _param_size = param.size, size = _param_size === void 0 ? "medium" : _param_size, children = param.children, onClick = param.onClick;
    var baseStyles = "rounded-md font-semibold transition-colors";
    var variantStyles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
    };
    var sizeStyles = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2",
        large: "px-6 py-3 text-lg"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        className: "".concat(baseStyles, " ").concat(variantStyles[variant], " ").concat(sizeStyles[size]),
        onClick: onClick,
        children: children
    });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Button: Button
});
//# sourceMappingURL=index.js.map