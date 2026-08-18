import type { ComponentPropsWithoutRef } from "react"

type InputProps = {
    id: string,
    label: string,
} & ComponentPropsWithoutRef<"input">;

export default function Input({ id, label, ...props }: InputProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input className="bg-zinc-200 dark:bg-zinc-800 p-2 focus:outline-1 focus:outline-orange-300 dark:focus:outline-purple-800" {...props} id={id} type="text" />
        </>
    )
}