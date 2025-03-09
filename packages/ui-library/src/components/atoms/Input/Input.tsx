import * as React from "react"
import { cn } from "@/lib/util"
import { cva, type VariantProps } from "class-variance-authority"

const inputVariants = cva(
  "flex w-full border border-border-DEFAULT bg-white px-5 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      textSize: {
        xs: "text-xs",      // 12px
        sm: "text-sm",      // 14px
          base: "text-base",  // 16px
          lg: "text-lg",      // 18px
          xl: "text-xl",      // 20px
          "2xl": "text-2xl",  // 24px
          "3xl": "text-3xl",  // 30px
      },
      fontWeight: {
        thin: "font-thin",        // 100
        light: "font-light",      // 300
        normal: "font-normal",    // 400
        medium: "font-medium",    // 500
        semibold: "font-semibold", // 600
        bold: "font-bold",        // 700
        extrabold: "font-extrabold", // 800
      },
    },
    defaultVariants: {
      radius: "md",
      textSize: "base",
      fontWeight: "normal",
    },
  }
)

interface InputProps extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> {
  width: string;
  height: string;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  paddingLeft?: string;
  paddingRight?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, width, height, placeholder, leftIcon, rightIcon, radius, textSize, fontWeight, paddingLeft = "pl-12", paddingRight = "pr-12", ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center w-full">
        {leftIcon && (
          <div className="absolute left-5 flex items-center pointer-events-none text-text-DEFAULT">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            inputVariants({ radius, textSize, fontWeight }),
            leftIcon && paddingLeft,
            rightIcon && paddingRight,
            className,
          )}
          style={{ width: width, height: height }}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-5 flex items-center text-text-DEFAULT">
            {rightIcon}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, type InputProps }
