type Props = {
    value: string;
    onChange: (value: string) => void
}

export default function SortSelect({ value, onChange }: Props) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="sort">
                Sort by
            </label>

            <select
                id="sort"
                name="sort"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="
                    w-full
                    rounded
                    bg-zinc-200
                    p-4
                    text-zinc-900
                    outline-none
                    transition
                    dark:bg-zinc-800
                    dark:text-zinc-100
                    dark:focus:ring-purple-800
                "
            >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
        </div>
    );
}