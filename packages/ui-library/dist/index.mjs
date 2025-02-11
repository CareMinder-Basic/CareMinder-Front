// src/Button/index.tsx
import { jsx } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx("button", {
        className: "".concat(baseStyles, " ").concat(variantStyles[variant], " ").concat(sizeStyles[size]),
        onClick: onClick,
        children: children
    });
};
export { Button };
//# sourceMappingURL=index.mjs.map