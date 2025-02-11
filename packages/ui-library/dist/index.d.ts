import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface ButtonProps {
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    children: React.ReactNode;
    onClick?: () => void;
}
declare const Button: ({ variant, size, children, onClick, }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps };
