import { FC, PropsWithChildren } from 'react';
import { ButtonProps } from '@mui/material';
import * as react_jsx_runtime from 'react/jsx-runtime';

type CustomButtonProps = {
    buttontype: "primary" | "primarySpaure" | "primarySpaureWhite" | "gradient" | "primaryWhite" | "primaryBlack" | "primarySpaureLong" | "impactRed" | "primarySecond";
    icon?: React.ReactNode;
    width: string | number;
    height: string | number;
    fontSize: string | number;
    borderRadius: string | number;
    fontWeight?: string | number;
    lineHeight?: string | number;
} & ButtonProps;
declare const CDSButton: FC<CustomButtonProps>;

declare function MuiSetting({ children }: PropsWithChildren): react_jsx_runtime.JSX.Element;

export { CDSButton as Button, type CustomButtonProps, MuiSetting as ThemeProvider };
