"use client";

import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Reusable input component based on the shadcn/ui style-guide.
 *
 * It includes:
 * – Consistent height / padding
 * – Theme-aware border / background / focus ring
 * – Props forwarding so you can pass `type`, `placeholder`, etc.
 *
 * Usage example:
 *   <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", ...props }, ref) => {
    const baseClasses =
      "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    return (
      <input
        ref={ref}
        type={type}
        className={`${baseClasses} ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
