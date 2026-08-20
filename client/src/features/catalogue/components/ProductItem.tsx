import { Link } from "react-router";
import { type Product } from "../../../app/models/Product";
import Button from "../../../components/ui/Button";
import { Plus } from "lucide-react";
import useBasket from "../../basket/hook/useBasket";

type Props = {
    product: Product
}

export default function ProductItem({ product }: Props) {
    const { id, pictureUrl, name, price } = product
    const { addItemToBasket } = useBasket();


    return (

        <section className="
            rounded-md 
            shadow-md 
            overflow-hidden 
            w-70
            h-full
            flex 
            flex-col
            bg-zinc-100 
            dark:bg-zinc-900
            ">
            <Link className="flex-1" to={`/product/${id}`}>
                <div className="aspect-square" >
                    <img className="w-full h-full object-cover" src={pictureUrl} alt={name} />
                </div>
                <div className="p-5">
                    <h3>{name}</h3>
                </div>
            </Link>
            <div className="flex p-3 justify-between items-center w-full">
                <p className="pl-2">£{(price / 100).toFixed(2)}</p>
                <Button onClick={(e) => {
                    e.preventDefault()
                    addItemToBasket(id)
                }}>
                    <Plus />
                </ Button>
            </div>
        </section>
    )
}