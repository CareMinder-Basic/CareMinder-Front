const CMColors = {
  primary: {
    a0: "#000000",
    a60: "#5D6DBE",
    a90: "#AFB6DB",
    a95: "#EFF1F9",
    a100: "#FFFFFF",
  },
  black: "#000000",
  text: "#5E5F65",
  disabled: "#C4C5CC",
  border: "#ECECEC",
  background: "#F5F5F5",
  white: "#ffffff",
  status: {
    wait: "#30B4FF",
    excute: "#F24679",
    finish: "#5E5F65",
  },
  error: "#F24679",
  admin: "#5DB8BE",
} as const;

const palette = {
  primary: {
    main: CMColors.primary.a60,
    light: CMColors.primary.a90,
    dark: CMColors.primary.a0,
    contrastText: CMColors.primary.a100,
  },
  secondary: {
    main: CMColors.status.wait,
    light: CMColors.primary.a100,
    dark: "rgba(255,255,255,0.2)",
    contrastText: CMColors.white,
  },
  error: {
    main: CMColors.error,
  },
  text: {
    primary: CMColors.text,
    secondary: CMColors.primary.a60,
    dark: CMColors.black,
  },
  background: {
    default: CMColors.background,
    paper: CMColors.white,
  },
  action: {
    disabled: CMColors.disabled,
  },
  success: {
    main: CMColors.primary.a95,
    light: CMColors.admin,
    dark: CMColors.status.excute,
  },
  divider: CMColors.border,
} as const;

export default palette;
