import type { Product } from "../../app/models/Product";
import Button from "../../components/ui/Button";
import { Plus } from "lucide-react";

type Props = {
    product: Product
}

export default function ProductItem({ product }: Props) {
    const { pictureUrl, name, price } = product

    return (
        <section className="
            rounded-md 
            shadow-md 
            overflow-hidden 
            w-70
            h-full
            flex 
            flex-col
            bg-white 
            dark:bg-zinc-900
            cursor-pointer
        ">
            <div className="aspect-square" >
                <img className="w-full h-full object-cover" src={pictureUrl} alt={name} />
            </div>
            <div className="p-5 flex-1">
                <h3>{name}</h3>
            </div>
            <div className="flex p-3 justify-between items-center w-full">
                <p className="pl-2">£{(price / 100).toFixed(2)}</p>
                <Button>
                    <Plus />
                </ Button>
            </div>

        </section>
    )
}