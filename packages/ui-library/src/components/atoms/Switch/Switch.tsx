import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/util"
import { VariantProps, cva } from "class-variance-authority"

const switchVariants = cva(
  "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        admin: [
          "data-[state=checked]:bg-admin",
          "data-[state=unchecked]:bg-primary/30", // 30% 투명도의 primary 색상
        ],
        staff: [
          "data-[state=checked]:bg-secondary",
          "data-[state=unchecked]:bg-secondary/30", // 30% 투명도의 민트색
        ],
        ward: [
          "data-[state=checked]:bg-primary",
          "data-[state=unchecked]:bg-primary/30", // 30% 투명도의 파란색
        ],
      },
    },
    defaultVariants: {
      variant: "admin",
    },
  }
)

interface SwitchProps extends 
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
  VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, variant, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ variant }), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))

Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }