// src/components/atoms/Button/Button.tsx
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
import { Button, styled } from "@mui/material";
import { jsx, jsxs } from "react/jsx-runtime";
var CDSButton = function(_param) {
    var children = _param.children, buttontype = _param.buttontype, icon = _param.icon, width = _param.width, height = _param.height, fontSize = _param.fontSize, borderRadius = _param.borderRadius, fontWeight = _param.fontWeight, lineHeight = _param.lineHeight, props = _object_without_properties(_param, [
        "children",
        "buttontype",
        "icon",
        "width",
        "height",
        "fontSize",
        "borderRadius",
        "fontWeight",
        "lineHeight"
    ]);
    return /* @__PURE__ */ jsxs(StyledButton, _object_spread_props(_object_spread({
        width: width,
        height: height,
        fontSize: fontSize,
        borderRadius: borderRadius,
        buttontype: buttontype,
        $width: width,
        $height: height,
        $fontSize: fontSize,
        $borderRadius: borderRadius,
        $fontWeight: fontWeight,
        $lineHeight: lineHeight
    }, props), {
        children: [
            children,
            icon && /* @__PURE__ */ jsx(IconWrapper, {
                children: icon
            })
        ]
    }));
};
var Button_default = CDSButton;
var StyledButton = styled(Button)(function(param) {
    var buttontype = param.buttontype, theme2 = param.theme, $width = param.$width, $height = param.$height, $fontSize = param.$fontSize, $borderRadius = param.$borderRadius, $fontWeight = param.$fontWeight, $lineHeight = param.$lineHeight;
    return _object_spread({
        position: "relative",
        width: $width || "auto",
        height: $height || "auto",
        fontSize: $fontSize || "16px",
        borderRadius: $borderRadius || "",
        fontWeight: $fontWeight || "700",
        lineHeight: $lineHeight || "24px"
    }, buttontype === "primary" && {
        backgroundColor: theme2.palette.primary.main,
        color: theme2.palette.primary.contrastText
    }, buttontype === "primaryWhite" && {
        backgroundColor: theme2.palette.primary.contrastText,
        color: theme2.palette.primary.dark,
        border: "1px solid #ECECEC"
    }, buttontype === "primarySpaureWhite" && {
        backgroundColor: theme2.palette.primary.contrastText,
        color: theme2.palette.primary.main,
        border: "1px solid ".concat(theme2.palette.primary.main)
    }, buttontype === "primaryBlack" && {
        backgroundColor: theme2.palette.primary.contrastText,
        color: "black",
        border: "1px solid #8C8E94"
    }, buttontype === "gradient" && {
        backgroundImage: "linear-gradient(#5D6DBE,#607AFF)",
        color: theme2.palette.primary.contrastText,
        border: "1px solid ".concat(theme2.palette.primary.main),
        "&:disabled": {
            backgroundImage: "none",
            backgroundColor: theme2.palette.action.disabled,
            color: theme2.palette.primary.contrastText,
            border: "none"
        }
    }, buttontype === "impactRed" && {
        backgroundColor: "#FF5353",
        color: theme2.palette.primary.contrastText,
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: "500",
        "&:disabled": {
            backgroundImage: "none",
            backgroundColor: theme2.palette.action.disabled,
            color: theme2.palette.primary.contrastText,
            border: "none"
        },
        "&:hover": {
            backgroundColor: "#ffffff",
            border: "1px solid #FF5353",
            color: "#FF5353"
        }
    }, buttontype === "primarySecond" && {
        backgroundColor: "#ffffff",
        color: theme2.palette.secondary.main,
        borderRadius: "6px",
        lineHeight: "24px",
        fontWeight: "700",
        border: "1px solid ".concat(theme2.palette.secondary.main),
        "&:disabled": {
            backgroundImage: "none",
            backgroundColor: theme2.palette.action.disabled,
            color: theme2.palette.primary.contrastText,
            border: "none"
        },
        "&:hover": {
            backgroundColor: theme2.palette.secondary.main,
            color: "#ffffff"
        }
    });
});
var IconWrapper = styled("span")({
    display: "flex",
    position: "absolute",
    alignItems: "center",
    right: 9
});
// src/mui/theme-provider.tsx
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
// src/mui/palette.ts
var CMColors = {
    primary: {
        a0: "#000000",
        a60: "#5D6DBE",
        a90: "#AFB6DB",
        a95: "#EFF1F9",
        a100: "#FFFFFF"
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
        finish: "#5E5F65"
    },
    error: "#F24679",
    admin: "#5DB8BE"
};
var palette = {
    primary: {
        main: CMColors.primary.a60,
        light: CMColors.primary.a90,
        dark: CMColors.primary.a0,
        contrastText: CMColors.primary.a100
    },
    secondary: {
        main: CMColors.status.wait,
        light: CMColors.primary.a100,
        dark: "rgba(255,255,255,0.2)",
        contrastText: CMColors.white
    },
    error: {
        main: CMColors.error
    },
    text: {
        primary: CMColors.text,
        secondary: CMColors.primary.a60,
        dark: CMColors.black
    },
    background: {
        default: CMColors.background,
        paper: CMColors.white
    },
    action: {
        disabled: CMColors.disabled
    },
    success: {
        main: CMColors.primary.a95,
        light: CMColors.admin,
        dark: CMColors.status.excute
    },
    divider: CMColors.border
};
var palette_default = palette;
// src/mui/typography.ts
var calcRem = function(px) {
    return "".concat(px / 16, "rem");
};
var typography = {
    fontFamily: "Pretendard, Arial, sans-serif",
    /**
   * @description Pretendard Bold, Font Size: 24px
   */ h1: {
        fontFamily: "Pretendard Bold",
        fontSize: calcRem(24),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: "-0.03em"
    },
    /**
   * @description Pretendard Bold, Font Size: 18px
   */ h2: {
        fontFamily: "Pretendard Bold",
        fontSize: calcRem(18),
        fontWeight: 700,
        lineHeight: 1.44,
        letterSpacing: "-0.03em"
    },
    /**
   * @description Pretendard Medium, Font Size: 16px
   */ h3: {
        fontFamily: "Pretendard Medium",
        fontSize: calcRem(16),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: "-0.03em"
    },
    /**
   * @description Pretendard Medium, Font Size: 14px
   */ h4: {
        fontFamily: "Pretendard Medium",
        fontSize: calcRem(14),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: "-0.03em"
    },
    /**
   * * @description Pretendard Medium, Font Size: 13px
   */ h5: {
        fontFamily: "Pretendard Medium",
        fontSize: calcRem(13),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: "-0.03em"
    },
    /**
   * @description Pretendard Regular, Font Size: 14px
   */ body1: {
        fontFamily: "Pretendard Regular",
        fontSize: calcRem(14),
        lineHeight: 1.42,
        letterSpacing: "-0.03em"
    },
    /**
   * @description Pretendard Regular, Font Size: 13px
   */ body2: {
        fontFamily: "Pretendard Regular",
        fontSize: calcRem(13),
        lineHeight: 1.54,
        letterSpacing: "-0.03em"
    },
    /**
   * @description Pretendard Regular, Font Size: 16px
   */ subtitle1: {
        fontFamily: "Pretendard Regular",
        fontSize: calcRem(16),
        lineHeight: 1.5,
        letterSpacing: "-0.03em"
    },
    /**
   * @description Pretendard Regular, Font Size: 14px
   */ subtitle2: {
        fontFamily: "Pretendard Regular",
        fontSize: calcRem(14),
        lineHeight: 1.42,
        letterSpacing: "-0.03em"
    },
    /**
   * @description Pretendard Regular, Font Size: 12px
   */ caption: {
        fontFamily: "Pretendard Regular",
        fontSize: calcRem(12),
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: "-0.03em"
    },
    /**
   * @description Pretendard Regular, Font Size: 14px
   */ overline: {
        fontFamily: "Pretendard Regular",
        fontSize: calcRem(14),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: "-0.03em"
    }
};
var typography_default = typography;
// src/mui/components.ts
var components = {
    MuiButton: {
        defaultProps: {
            disableRipple: true,
            disableElevation: true
        },
        variants: [
            {
                props: {
                    variant: "text"
                },
                style: {
                    color: palette_default.primary.light
                }
            },
            {
                props: {
                    variant: "outlined"
                },
                style: {
                    borderColor: palette_default.primary.main
                }
            },
            {
                props: {
                    variant: "contained"
                },
                style: {
                    backgroundColor: palette_default.primary.main,
                    color: palette_default.primary.contrastText,
                    "&:hover": {
                        backgroundColor: palette_default.primary.light
                    }
                }
            }
        ],
        styleOverrides: {
            root: {
                fontWeight: 600,
                padding: "6px 16px",
                borderRadius: "6px",
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "-0.03em"
            }
        }
    },
    MuiInputLabel: {
        styleOverrides: {
            root: {
                color: palette_default.primary.dark,
                position: "relative",
                fontWeight: 600,
                transform: "none",
                fontSize: "14px"
            },
            asterisk: {
                color: palette_default.primary.main
            }
        }
    },
    MuiTextField: {
        defaultProps: {
            fullWidth: true
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                fontSize: "16px",
                borderRadius: "12px",
                "&.Mui-disabled": {
                    ".MuiOutlinedInput-notchedOutline": {
                        color: palette_default.text.primary,
                        borderColor: palette_default.action.disabled
                    },
                    backgroundColor: palette_default.background.default
                }
            }
        }
    },
    MuiLink: {
        styleOverrides: {
            root: {
                textDecoration: "none",
                color: palette_default.text.primary,
                opacity: 0.6
            }
        }
    },
    MuiFormControlLabel: {
        styleOverrides: {
            root: {
                margin: 0,
                marginTop: "24px",
                display: "flex",
                justifyContent: "center",
                gap: "8px"
            }
        }
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                marginLeft: 0,
                marginRight: 0
            }
        }
    },
    MuiCheckbox: {
        defaultProps: {
            disableRipple: true,
            size: "large"
        },
        styleOverrides: {
            root: {
                padding: 0,
                borderRadius: "4px"
            }
        }
    }
};
var components_default = components;
// src/mui/theme-provider.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var theme = createTheme({
    typography: typography_default,
    palette: palette_default,
    components: components_default
});
function MuiSetting(param) {
    var children = param.children;
    return /* @__PURE__ */ jsxs2(ThemeProvider, {
        theme: theme,
        children: [
            /* @__PURE__ */ jsx2(CssBaseline, {}),
            children
        ]
    });
}
export { Button_default as Button, MuiSetting as ThemeProvider };
//# sourceMappingURL=index.mjs.map