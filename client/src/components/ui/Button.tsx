import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    className?: string
} & ComponentPropsWithoutRef<"button">

export default function Button({ className, children, ...props }: ButtonProps) {
    return (
        <button className={`btn ${className}`} {...props}>
            {children}
        </button>
    )
}