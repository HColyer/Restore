import type { ReactNode } from "react"

type Props = {
    title: string,
    children?: ReactNode
}

export default function Fieldset({ title, children }: Props) {
    return (
        <fieldset>
            <legend>
                {title}
            </legend>
            <div className="grid grid-cols-2 gap-y-3 p-2">
                {children}
            </div>
        </fieldset>
    )
}