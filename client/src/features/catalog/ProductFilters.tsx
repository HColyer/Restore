import Button from "../../components/ui/Button"
import Fieldset from "../../components/Fieldset"
import Checkbox from "../../components/ui/Checkbox"
import SortSelect from "../../components/ui/SortSelect"
import { Search } from "lucide-react"
import useProduct from "../../hooks/useProductContext"
import { useEffect } from "react";


export default function ProductFilters() {
    const { state, searchProducts, fetchFilters, clearFilters, toggleFilter, setOrderBy } = useProduct();
    useEffect(() => {
        fetchFilters();
    }, [])

    return (
        <form className="bg-zinc-100 dark:bg-zinc-900 flex flex-col p-6 space-y-8">
            <div className="flex justify-center items-center bg-zinc-200 dark:bg-zinc-800 space-x-2 px-2">
                <label htmlFor="search" className="sr-only">Search products</label>
                <input
                    id="search"
                    type="search"
                    value={state.searchTerm}
                    placeholder="Search products..."
                    className=" w-full px-2 py-4 focus:outline-0"
                    onChange={(e) => searchProducts(e.target.value)}
                />
                <Search className="text-zinc-900 dark:text-zinc-100" />
            </div>

            <div className="max-h-60 overflow-y-scroll">
                <Fieldset title="Brand">
                    {state.brands.map((brand) => (
                        <Checkbox checked={state.selectedBrands.includes(brand)} onChange={toggleFilter} key={brand} name={brand} category="brand" />
                    ))}
                </Fieldset>
                <Fieldset title="Type">
                    {state.types.map((type) => (
                        <Checkbox checked={state.selectedTypes.includes(type)} onChange={toggleFilter} key={type} name={type} category="type" />
                    ))}
                </Fieldset>

                <SortSelect value={state.orderBy} onChange={setOrderBy} />

            </div>
            <Button onClick={(e) => {
                e.preventDefault()
                clearFilters()
            }}>
                Clear filters
            </Button>
        </form>
    )
}