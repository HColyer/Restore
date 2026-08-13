import Button from "../../components/ui/Button"
import Checkbox from "../../components/ui/Checkbox"
import { Search } from "lucide-react"
export default function ProductFilters() {
    return (
        <section className="pt-50">
            <form className="bg-zinc-100 max-w-100 dark:bg-zinc-900 flex flex-col p-6 space-y-10">
                <div className="flex justify-center items-center bg-zinc-200 dark:bg-zinc-800 space-x-2 px-2">
                    <label htmlFor="search" className="sr-only">Search products</label>
                    <input
                        id="search"
                        type="search"
                        placeholder="Search products..."
                        className=" w-full p-2 focus:outline-0"
                    />
                    <Search className="text-zinc-900 dark:text-zinc-100"/>
                </div>

                <fieldset>
                    <legend>Brand</legend>

                    <label>
                        <input type="checkbox" name="brand" value="nike" />
                        Nike
                    </label>

                    <Checkbox name="nike" category="brand" />
                </fieldset>

                

                <div>
                    <label htmlFor="sort">Sort by</label>

                    <select id="sort" name="sort">
                        <option value="name">Name</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                </div>

                <Button type="submit">
                    Apply filters
                </Button>
            </form>
        </section>
    )
}