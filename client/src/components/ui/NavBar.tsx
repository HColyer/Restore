import IconLink from "./IconLink";
import ThemeToggle from "../../features/theme/ThemeToggle";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { Link } from "react-router";
import CountBadge from "./CountBadge";
import useBasket from "../../hooks/useBasketContext.ts";

type NavBarProps = {
    imageSrc: string,
    imageAlt: string,
    title?: string
}

export default function NavBar({ imageSrc, imageAlt, title }: NavBarProps) {
    const { basket } = useBasket();

    const totalQuantity = basket?.items.reduce(
        (total, item) => total + item.quantity,
        0
    );
    
    return (
        <nav className="fixed w-screen py-2 px-10 flex justify-between items-center bg-zinc-100 dark:bg-zinc-900">
            <Link to="/" className="flex items-center">
                <img className="w-20" src={imageSrc} alt={imageAlt} />
                {title && <h1>{title}</h1>}

            </Link>
            <div className="flex space-x-3">
                <ul className="flex items-center space-x-4 px-1">
                    <li className={totalQuantity > 0 ? "relative" : ""}>
                        <IconLink href="/basket" icon={<ShoppingCart />} />
                        {totalQuantity > 0 && <CountBadge max={99} productQuantity={totalQuantity} />}
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