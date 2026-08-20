import type { ComponentPropsWithoutRef } from "react";
import Button from "./Button";

type FormProps = {
    text: string,
} & ComponentPropsWithoutRef<"form">

export default function Form({ children, text, ...props }: FormProps) {
    return (
        <form className="flex flex-col bg-zinc-100 dark:bg-zinc-900 p-6 space-y-3 w-113.2" {...props}>
            {children}
            <Button type="submit" className="mt-8">
                {text}
            </Button>
        </form>
    )
}