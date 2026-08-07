type Props = {
    productQuantity: number,
    max: number
}

export default function CountBadge({ productQuantity, max }: Props) {
    return (
        <span className="absolute bottom-3 left-4 rounded-full size-5 text-sm text-center text-zinc-100 bg-orange-400 dark:bg-purple-600" >
            {productQuantity < max ? productQuantity : max}
        </span>
    )
}