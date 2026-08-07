import { useEffect, useState } from "react"
import type { Product } from "../models/Product"
import Catalog from "../../features/catalog/Catalog"
import NavBar from "../../components/ui/NavBar"

function App() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {

    async function getProducts() {
      try {
        const res = await fetch("https://localhost:5001/api/products")
        if (!res.ok) {
          throw new Error("failed to fetch products")
        }
        const data: Product[] = await res.json()
        setProducts(data);
      } catch (error) {
        console.log(error)
      }
    }

    getProducts();
  }, [])

  return (
    <>
      <main className="">
        <NavBar imageSrc="/images/ski-logo.png" imageAlt="Company logo, Man skiing"/>
        <Catalog products={products} />
      </main>
    </>
  )
}
export default App
