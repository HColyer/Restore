import Button from "../../components/ui/Button"
import Fieldset from "../../components/ui/Fieldset"
import Checkbox from "../../components/ui/Checkbox"
import SortSelect from "../../components/ui/SortSelect"
import { Search, ChevronRight } from "lucide-react"
import useProduct from "../../hooks/useProductContext"
import { useEffect, useState, useRef } from "react";


export default function ProductFilters() {
    const { state, searchProducts, fetchFilters, clearFilters, toggleFilter, setOrderBy } = useProduct();
    const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        fetchFilters();
        const handleClickOutside = (event: MouseEvent) => {
            if (
                formRef.current &&
                !formRef.current.contains(event.target as Node)
            ) {
                setFiltersOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <form ref={formRef} className={`fixed bottom-18 right-0 z-10 p-3
            bg-zinc-100 dark:bg-zinc-900
            flex flex-col lg:space-y-8
            transition-transform duration-300
            ${filtersOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
            lg:relative lg:top-0 lg:left-auto lg:w-auto
            lg:max-w-80 lg:translate-x-0
            `}>
            {/* Search */}
            <div className="bg-zinc-200 dark:bg-zinc-800 flex items-center px-3">
                <label htmlFor="search" className="sr-only">
                    Search products
                </label>

                <input
                    id="search"
                    type="search"
                    value={state.searchTerm}
                    placeholder="Search"
                    className="w-full px-2 py-4 focus:outline-0"
                    onChange={(e) => searchProducts(e.target.value)}
                />

                <Search />
            </div>

            {/* Mobile dropdown button */}
            <button
                type="button"
                className="bg-zinc-100 dark:bg-zinc-900 absolute left-0 bottom-0 -translate-x-full cursor-pointer p-3 mx-auto lg:hidden rounded-bl rounded-tl"
                onClick={() => setFiltersOpen(prev => !prev)}
            >
                {filtersOpen ? <ChevronRight /> : <Search />}
            </button>

            <div
                className={`
                max-h-70 overflow-y-scroll py-3
                md:block
            `}
            >
                <Fieldset title="Brand">
                    {state.brands.map((brand) => (
                        <Checkbox
                            checked={state.selectedBrands.includes(brand)}
                            onChange={toggleFilter}
                            key={brand}
                            name={brand}
                            category="brand"
                        />
                    ))}
                </Fieldset>

                <Fieldset title="Type">
                    {state.types.map((type) => (
                        <Checkbox
                            checked={state.selectedTypes.includes(type)}
                            onChange={toggleFilter}
                            key={type}
                            name={type}
                            category="type"
                        />
                    ))}
                </Fieldset>

                <SortSelect
                    value={state.orderBy}
                    onChange={setOrderBy}
                />
            </div>
            <Button
                onClick={(e) => {
                    e.preventDefault()
                    clearFilters()
                }}
            >
                Clear filters
            </Button>
        </form>
    )
}