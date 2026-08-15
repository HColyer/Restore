import type { ReactNode } from "react";
import { Link } from "react-router";

type Props = {
    href: string,
    icon?: ReactNode,
    className?: string
}

export default function IconLink({ href, icon, className }: Props) {
    return (
        <>
            <Link className={`${className ?? ""} sm:block dark:hover:text-purple-600 hover:text-orange-400`} to={href}>
                {icon}
            </Link>
        </>
    )
}