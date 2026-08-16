import ProductList from "./ProductList"
import useProduct from "../../hooks/useProductContext"
import ProductFilters from "./ProductFilters"
import Pagination from "../../components/ui/Pagination"

export default function CatelogPage() {
    const { state, increasePage, decreasePage } = useProduct();
    const totalPages = Math.ceil(state.totalCount / state.pageSize);

    return (
        <main className="flex flex-col justify-center lg:grid lg:grid-cols-[350px_1fr] gap-6 px-6 sm:pt-28">
            <aside className="md:block md:fixed top-30">
                <ProductFilters />
            </aside>

            <section className="mx-auto md:col-start-2 md:pt-10">
                <ProductList products={state.products} />
            </section>

            {totalPages > 1 && (
                <div className="col-span-2 pb-18">
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