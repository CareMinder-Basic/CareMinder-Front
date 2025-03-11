import * as React from "react";
import { cn } from "@/lib/util";
import { Loader2 } from "lucide-react";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "admin" | "staff" | "ward";
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", variant = "admin", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    };

    const variantClasses = {
      admin: "text-admin",
      staff: "text-secondary",
      ward: "text-primary",
    };

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center", className)}
        {...props}
      >
        <Loader2 
          className={cn(
            "animate-spin", 
            sizeClasses[size], 
            variantClasses[variant]
          )} 
        />
      </div>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner, type SpinnerProps };