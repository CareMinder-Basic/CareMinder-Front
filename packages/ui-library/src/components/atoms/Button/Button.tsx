import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/util"

const buttonVariants = cva(
"pointer:cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:bg-disabled disabled:text-primary-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" ,
 {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",        
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        gradient: "bg-gradient-to-b from-primary to-primary-paleLight text-primary-foreground shadow-xs hover:bg-gradient-to-t hover:from-primary/90 hover:to-primary-paleLight/90 disabled:bg-none disabled:from-disabled disabled:to-disabled",
        link: "text-primary underline-offset-4 hover:underline",
      },      
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
      variant: "default",
      radius: "md",
      textSize: "base",
      fontWeight: "medium",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    width: string;
    height: string;    
    color?: string;
  };

const Button = ({
  className,
  variant,
  radius,
  textSize,
  color="#ffffff",
  fontWeight,
  width,
  height,  
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp  
      data-slot="button"      
      className={cn(buttonVariants({ variant, radius, textSize, fontWeight, className }))}      
      style={{ width: width, height: height,color:color }}
      {...props}
    />
  )
}

export { Button, type ButtonProps }
