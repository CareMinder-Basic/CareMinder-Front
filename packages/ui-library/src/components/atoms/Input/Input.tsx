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
      status: {
        default: "focus-visible:ring-input-default",
        error: "border-input-error text-white focus-visible:ring-input-error",
        success: "border-input-success text-white focus-visible:ring-input-success",               
      }
    },
    defaultVariants: {
      radius: "md",
      textSize: "base",
      fontWeight: "normal",
      status: "default"
    },
  }
)

interface InputProps extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> {
  width: string;
  height: string;
  className?: string;
  leftIcon?: React.ReactNode;
  leftIconPosition?: number
  rightIcon?: React.ReactNode;
  rightIconPosition?: number
  paddingLeft?: string;
  paddingRight?: string;
  status?: "default" | "error" | "success";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, width, status, height, placeholder, leftIcon, leftIconPosition = 5, rightIcon, rightIconPosition = 5, radius, textSize, fontWeight, paddingLeft = "pl-12", paddingRight = "pr-12", ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center w-full">
        {leftIcon && (
          <div className={`absolute flex items-center pointer-events-none text-text-DEFAULT`} style={{ left: `${leftIconPosition}px` }}>
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            inputVariants({ radius, textSize, fontWeight, status }),
            leftIcon && paddingLeft,
            rightIcon && paddingRight,
            className,
          )}
          style={{ width: width, height: height }}
          ref={ref}          
          {...props}
        />
        {rightIcon && (
          <div className={`absolute flex items-center text-text-DEFAULT`} style={{ right: `${rightIconPosition}px` }}>
            {rightIcon}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, type InputProps }
