import type { ComponentPropsWithoutRef } from "react"

type InputProps = {
    id: string,
    label: string,
} & ComponentPropsWithoutRef<"input">;

export default function Input({ id, label, ...props }: InputProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input className="bg-zinc-200 dark:bg-zinc-700 p-2 focus:bg-zinc-300 dark:focus:bg-zinc-800 outline-0" {...props} id={id} />
        </>
    )
}