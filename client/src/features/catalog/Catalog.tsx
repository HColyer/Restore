import ProductList from "./ProductList"
import useProduct from "../../hooks/useProductContext"
import ProductFilters from "./ProductFilters"
import Pagination from "../../components/ui/Pagination"

export default function CatalogPage() {
    const { state, increasePage, decreasePage } = useProduct();
    const totalPages = Math.ceil(state.totalCount / state.pageSize);

    return (
        <main className="grid grid-cols-[450px_1fr] gap-6 pt-24 px-6">
            <aside className="fixed top-30 w-100">
                <ProductFilters />
            </aside>

            <section className="col-start-2 pt-14">
                <ProductList products={state.products} />
            </section>

            {totalPages > 1 && (
                <div className="col-span-2">
                    <Pagination
                        onPrevious={decreasePage}
                        onNext={increasePage}
                        currentPage={state.pageNumber}
                        totalPages={totalPages}
                    />
                </div>
            )}
        </main>
    );
}