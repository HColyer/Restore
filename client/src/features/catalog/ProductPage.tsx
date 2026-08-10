import type { Product } from "../../app/models/Product"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"
import useBasket from "../../hooks/useBasketContext"
import Button from "../../components/ui/Button"
import LoadingSpinner from "../../components/ui/LoadingSpinner"
import { getProduct } from "../../services/CatalogServices"
import { Plus } from "lucide-react"
import handleApiError from "../../api/handleApiError"

export default function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null)
    const { addItem } = useBasket();

    useEffect(() => {
        async function loadProduct() {
            try {
                const data = await getProduct(id);
                setProduct(data);
            } catch (error) {
                handleApiError(error, navigate)
            }
        }
        loadProduct();

    }, [navigate, id])

    if (!product) {
        return (
            <div className="min-h-screen flex justify-center pt-40">
                <LoadingSpinner />
            </div>
        )
    }

    return (
        <main className="min-h-screen flex justify-center items-center pt-20">
            <section className="grid grid-cols-[400px_400px] gap-5 items-start">
                <img className="aspect-square overflow-hidden rounded-md border-2 border-orange-300 dark:border-purple-400 shadow-sm" src={product.pictureUrl} alt={product.name} />
                <div className="space-y-6">
                    <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-sm space-y-3 shadow-sm">
                        <h1>{product.name}</h1>
                        <h2>Product Info</h2>
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <div className="bg-zinc-100 dark:bg-zinc-900 flex p-4 justify-between items-center w-full col-start-2 shadow-sm">
                        <p className="pl-2">£{(product.price / 100).toFixed(2)}</p>
                        <Button onClick={() => addItem(product)}>
                            <Plus />
                        </ Button>
                    </div>
                </div>
            </section>
        </main>
    )
}