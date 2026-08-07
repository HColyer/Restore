import IconLink from "./IconLink";
import ThemeToggle from "../../features/theme/ThemeToggle";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";

type NavBarProps = {
    imageSrc: string,
    imageAlt: string,
    title?: string
}

export default function NavBar({ imageSrc, imageAlt, title }: NavBarProps) {
    return (
        <nav className="py-2 px-10 flex justify-between items-center bg-zinc-100 dark:bg-zinc-900">
            <div className="flex items-center">
                <img className="w-20" src={imageSrc} alt={imageAlt} />
                {title && <h1>{title}</h1>}

            </div>
            <div className="flex space-x-3">
                <ul className="flex items-center space-x-3">
                    <li>
                        <IconLink href={"#"} icon={<ShoppingCart />} />
                    </li>
                    <li>
                        <IconLink href={"#"} icon={<Heart />} />
                    </li>
                </ul>
                <div className="flex items-center justify-center gap-4">
                    <ThemeToggle />
                    <Button>
                        Login
                    </Button>
                </div>
            </div>
        </nav>
    )
}