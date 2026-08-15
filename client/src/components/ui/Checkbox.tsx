type Props = {
    name: string;
    category: "brand" | "type",
    checked: boolean,
    onChange: (name: string, category: "brand" | "type") => void
};

export default function Checkbox({ name, category, checked, onChange }: Props) {
    return (
        <label className="flex items-center cursor-pointer">
            <input
                checked={checked}
                onChange={() => onChange(name, category)}
                className="appearance-none
                h-5 w-5
                border border-orange-400
                rounded-4xl
                checked:bg-orange-400
                dark:border-purple-800
                dark:checked:bg-purple-800
                cursor-pointer
                mr-2"
                type="checkbox"
                name={category}
                value={name}
            />
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
    );
}