import { cn } from "@/app/lib/util";
import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        type={type}
        {...props}
        className={cn(
          "w-auto rounded-full px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition",
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
