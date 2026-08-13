import ProductList from "./ProductList"
import useProduct from "../../hooks/useProductContext"
import LoadingSpinner from "../../components/ui/LoadingSpinner"
import ProductFilters from "./ProductFilters" 
import Pagination from "../../components/ui/Pagination"

export default function CatalogPage() {
    const { state, increasePage, decreasePage } = useProduct()
    const totalPages = Math.ceil(state.totalCount / state.pageSize)

    if (state.loading) return (
        <div className="min-h-screen flex justify-center pt-40">
            <LoadingSpinner />
        </div>
    )
    return (
        <>
            <ProductFilters />
            <ProductList products={state.products} />
            <Pagination onPrevious={decreasePage} onNext={increasePage} currentPage={state.pageNumber} totalPages={totalPages} />
        </>
    )
}