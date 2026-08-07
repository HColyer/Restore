import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button className="cursor-pointer text-slate-100 bg-orange-400 hover:bg-orange-500 dark:bg-purple-800 dark:hover:bg-purple-900 py-4 px-6 rounded-sm" {...props}>
            {children}
        </button>
    )
}