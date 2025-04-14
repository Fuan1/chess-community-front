import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, errorMessage, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="block text-text-normal mb-1 text-sm"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-3 py-2 bg-background border border-border-light rounded-md text-text-normal",
            "focus:outline-none focus:ring-2 focus:ring-button-primary focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-warning focus:ring-warning",
            className
          )}
          {...props}
        />
        {error && errorMessage && (
          <p className="mt-1 text-sm text-warning">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
