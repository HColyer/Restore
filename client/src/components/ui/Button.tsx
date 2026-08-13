import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button className="btn" {...props}>
            {children}
        </button>
    )
}