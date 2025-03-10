import * as React from "react"
import { cn } from "@/lib/util"
import { VariantProps, cva } from "class-variance-authority"

const textareaVariants = cva(
  "rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
  {
    variants: {
      variant: {
        admin: [
          "focus:outline-none focus:border-admin focus:ring-1 focus:ring-admin",
        ],
        staff: [
          "focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary",
        ],
        ward: [
          "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
        ],
      },
    },
    defaultVariants: {
      variant: "admin",
    },
  }
)

interface TextareaProps extends Omit<React.ComponentProps<"textarea">, "className">, 
  VariantProps<typeof textareaVariants> {
  className?: string;
  width?: number;
  height?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, width, height, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant }), className)}
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : '80px',
        }}
        ref={ref}
        {...props}
      />
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
