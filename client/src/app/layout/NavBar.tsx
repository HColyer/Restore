import IconLink from "../../components/ui/IconLink.tsx";
import ThemeToggle from "../../features/theme/component/ThemeToggle.tsx";
import { ShoppingBasket, ShoppingCart, House, UsersRound } from "lucide-react";
import { Link } from "react-router";
import CountBadge from "../../components/ui/CountBadge.tsx";
import useBasket from "../../features/basket/hook/useBasket.ts";

type Props = {
    imageSrc: string,
    imageAlt: string,
    title?: string
}

export default function NavBar({ imageSrc, imageAlt, title }: Props) {
    const { basket } = useBasket();

    const totalQuantity = basket?.items.reduce(
        (total, item) => total + item.quantity,
        0
    ) ?? 0;

    return (
        <nav className="fixed bottom-0 sm:top-0 sm:bottom-auto w-screen p-5 sm:py-2 px-10 flex justify-center sm:justify-between items-center bg-zinc-100 dark:bg-zinc-900">
            <Link to="/" className="sm:flex items-center hidden">
                <img className="w-20" src={imageSrc} alt={imageAlt} />
                {title && <h1>{title}</h1>}

            </Link>
            <div className="flex">
                <ul className="flex items-center space-x-10 sm:space-x-2 sm:px-4">
                    <li>
                        <IconLink className="sm:hidden" href="/" icon={<ShoppingCart/>} />
                    </li>
                    <li className={totalQuantity > 0 ? "relative" : ""}>
                        <IconLink href="/basket" icon={<ShoppingBasket />} />
                        {totalQuantity > 0 && <CountBadge max={99} productQuantity={totalQuantity} />}
                    </li>
                    <li>
                        <IconLink className="sm:hidden" href="/" icon={<House />} />
                    </li>
                    <li>
                        <IconLink className="sm:hidden" href="/account" icon={<UsersRound />}/>
                    </li>
                    <li className="flex items-center">
                        <ThemeToggle />
                    </li>
                    {/* {<li>
                        <IconLink href={"#"} icon={<Heart />} />
                    </li>} */}
                </ul>
                <div className="flex items-center justify-center gap-4">
                    {/* {<ThemeToggle />} */}
                    <Link to="/account" className="hidden sm:block btn">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    )
}