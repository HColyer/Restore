type Props = {
    title: string
    message: string
}
export default function ErrorContainer({title, message}: Props) {
    return (
        <main className="flex justify-center pt-40">
            <section className="bg-zinc-100 dark:bg-zinc-900 p-10 shadow-sm rounded-sm">
                <h1 className="p-2 border-b-2 border-orange-400 dark:border-purple-700">{title}</h1>
                <p className="p-6">{message}</p>               
            </section>
        </main> 
    )
}