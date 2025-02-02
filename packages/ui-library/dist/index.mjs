// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ title, onPress }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: onPress,
      style: { padding: 10, backgroundColor: "#007AFF" },
      children: /* @__PURE__ */ jsx("p", { style: { color: "white", fontSize: 16 }, children: title })
    }
  );
};
export {
  Button
};
