import { FC } from "react";
import { Button, ButtonProps, styled } from "@mui/material";

export type CustomButtonProps = {
  buttontype:
    | "primary"
    | "primarySpaure"
    | "primarySpaureWhite"
    | "gradient"
    | "primaryWhite"
    | "primaryBlack"
    | "primarySpaureLong"
    | "impactRed"
    | "primarySecond";
  icon?: React.ReactNode;
  width: string | number;
  height: string | number;
  fontSize: string | number;
  borderRadius: string | number;
  fontWeight?: string | number;
  lineHeight?: string | number;
} & ButtonProps;

const CDSButton: FC<CustomButtonProps> = ({
  children,
  buttontype,
  icon,
  width,
  height,
  fontSize,
  borderRadius,
  fontWeight,
  lineHeight,
  ...props
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      fontSize={fontSize}
      borderRadius={borderRadius}
      buttontype={buttontype}
      $width={width}
      $height={height}
      $fontSize={fontSize}
      $borderRadius={borderRadius}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      {...props}
    >
      {children}
      {icon && <IconWrapper>{icon}</IconWrapper>}
    </StyledButton>
  );
};

export default CDSButton;

type StyledButtonProps = CustomButtonProps & {
  $width?: string | number;
  $height?: string | number;
  $fontSize?: string | number;
  $borderRadius?: string | number;
  $fontWeight?: string | number;
  $lineHeight?: string | number;
};

const StyledButton = styled(Button)<StyledButtonProps>(
  ({
    buttontype,
    theme,
    $width,
    $height,
    $fontSize,
    $borderRadius,
    $fontWeight,
    $lineHeight,
  }) => ({
    position: "relative",
    width: $width || "auto",
    height: $height || "auto",
    fontSize: $fontSize || "16px",
    borderRadius: $borderRadius || "",
    fontWeight: $fontWeight || "700",
    lineHeight: $lineHeight || "24px",

    ...(buttontype === "primary" && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    }),
    ...(buttontype === "primaryWhite" && {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.dark,
      border: "1px solid #ECECEC",
    }),
    ...(buttontype === "primarySpaureWhite" && {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
    }),
    ...(buttontype === "primaryBlack" && {
      backgroundColor: theme.palette.primary.contrastText,
      color: "black",
      border: `1px solid #8C8E94`,
    }),
    ...(buttontype === "gradient" && {
      backgroundImage: "linear-gradient(#5D6DBE,#607AFF)",
      color: theme.palette.primary.contrastText,
      border: `1px solid ${theme.palette.primary.main}`,
      "&:disabled": {
        backgroundImage: "none",
        backgroundColor: theme.palette.action.disabled,
        color: theme.palette.primary.contrastText,
        border: "none",
      },
    }),
    ...(buttontype === "impactRed" && {
      backgroundColor: "#FF5353",
      color: theme.palette.primary.contrastText,
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "500",
      "&:disabled": {
        backgroundImage: "none",
        backgroundColor: theme.palette.action.disabled,
        color: theme.palette.primary.contrastText,
        border: "none",
      },
      "&:hover": {
        backgroundColor: "#ffffff",
        border: "1px solid #FF5353",
        color: "#FF5353",
      },
    }),
    ...(buttontype === "primarySecond" && {
      backgroundColor: "#ffffff",
      color: theme.palette.secondary.main,
      borderRadius: "6px",
      lineHeight: "24px",
      fontWeight: "700",
      border: `1px solid ${theme.palette.secondary.main}`,
      "&:disabled": {
        backgroundImage: "none",
        backgroundColor: theme.palette.action.disabled,
        color: theme.palette.primary.contrastText,
        border: "none",
      },
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: "#ffffff",
      },
    }),
  })
);

const IconWrapper = styled("span")({
  display: "flex",
  position: "absolute",
  alignItems: "center",
  right: 9,
});
