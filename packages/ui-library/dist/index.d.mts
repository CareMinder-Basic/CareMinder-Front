import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { UseFormHandleSubmit, UseFormRegister, FieldErrors } from 'react-hook-form';

declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "link" | "outline" | "ghost" | "gradient" | null | undefined;
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
    textSize?: "base" | "sm" | "lg" | "xl" | "xs" | "2xl" | "3xl" | null | undefined;
    fontWeight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    width: string;
    height: string;
    color?: string;
};
declare const Button: ({ className, variant, radius, textSize, color, fontWeight, width, height, asChild, children, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const inputVariants: (props?: ({
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
    textSize?: "base" | "sm" | "lg" | "xl" | "xs" | "2xl" | "3xl" | null | undefined;
    fontWeight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | null | undefined;
    status?: "default" | "error" | "success" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface InputProps extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> {
    width: string;
    height: string;
    className?: string;
    leftIcon?: React.ReactNode;
    leftIconPosition?: number;
    rightIcon?: React.ReactNode;
    rightIconPosition?: number;
    paddingLeft?: string;
    paddingRight?: string;
    status?: "default" | "error" | "success";
}
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;

interface LoginFormData {
    loginId: string;
    password: string;
}
interface LoginFormProps {
    onSubmit: (data: LoginFormData) => void;
    handleSubmit: UseFormHandleSubmit<LoginFormData>;
    register: UseFormRegister<LoginFormData>;
    errors?: FieldErrors<LoginFormData>;
    isDisabled: boolean;
    dataCy?: {
        loginId: string;
        password: string;
        submitButton: string;
    };
    onError: (error: any) => void;
}
declare function LoginForm({ onSubmit, handleSubmit, register, onError, isDisabled, dataCy }: LoginFormProps): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, Input, type InputProps, LoginForm, buttonVariants };
