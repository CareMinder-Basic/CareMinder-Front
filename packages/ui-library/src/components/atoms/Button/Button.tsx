import { styled } from "@mui/material/styles";
import { ButtonBase, ButtonBaseProps } from "@mui/material";

export interface ButtonProps extends ButtonBaseProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
}

const StyledButton = styled(ButtonBase)<ButtonProps>(
  ({ theme, variant = "primary", size = "medium" }) => ({
    padding: theme.spacing(size === "small" ? 1 : size === "medium" ? 2 : 3),
    borderRadius: theme.shape.borderRadius,
    backgroundColor:
      variant === "primary"
        ? theme.palette.primary.main
        : variant === "secondary"
          ? theme.palette.secondary.main
          : "transparent",
  })
);

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};
