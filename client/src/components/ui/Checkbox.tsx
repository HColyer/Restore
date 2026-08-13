type Props = {
    name: string;
    category: "brand"|"type"
};

export default function Checkbox({ name, category }: Props) {
    return (
        <label>
            <input
                type="checkbox"
                name={category}
                value={name}
            />
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
    );
}