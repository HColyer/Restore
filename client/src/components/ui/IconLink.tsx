import type { ReactNode } from "react";
import { Link } from "react-router";

type Props = {
    href: string,
    icon?: ReactNode,
}

export default function IconLink({ href, icon }: Props) {
    return (
        <>
            <Link className="dark:hover:text-purple-600 hover:text-orange-400" to={href}>
                {icon}
            </Link>
        </>
    )
}