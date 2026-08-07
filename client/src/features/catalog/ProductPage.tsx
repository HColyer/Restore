import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getProduct } from "../../services/CatalogServices"
import type { Product } from "../../app/models/Product"
import Button from "../../components/ui/Button"
import LoadingSpinner from "../../components/ui/LoadingSpinner"
import { Plus } from "lucide-react"

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        async function loadProduct() {
            const data = await getProduct(id);
            setProduct(data);
        }

        loadProduct();

    }, [id])

    if (!product) {
        return (
            <div className="min-h-screen flex justify-center mt-40">
                <LoadingSpinner />
            </div>
        )
    }

    return (
        <main className="min-h-screen flex justify-center items-center">
            <section className="grid grid-cols-[400px_400px] gap-5 items-start">
                <div className="bg-zinc-100 dark:bg-zinc-900 p-4 w-100 rounded-sm">
                    <img className="aspect-square" src={product.pictureUrl} alt={product.name} />
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-sm space-y-3">
                    <h1>{product.name}</h1>
                    <p>
                        Brand:<br />
                        {product.brand}
                    </p>
                    <p>
                        Description:<br />
                        {product.description}
                    </p>

                    <div className="flex p-3 justify-between items-center w-full">
                        <p className="pl-2">£{(product.price / 100).toFixed(2)}</p>
                        <Button>
                            <Plus />
                        </ Button>
                    </div>
                </div>

            </section>

        </main>
    )
}