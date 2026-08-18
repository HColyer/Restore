import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"

export default function LoginForm() {
    return (
        <form className="flex flex-col bg-zinc-100 dark:bg-zinc-900 p-6 space-y-8">
            <div className="flex flex-col space-y-3">
                <Input label="Email" id="email" />
                <Input label="Password" id="password" />
            </div>

            <Button onClick={(e) => e.preventDefault()}>
                Login
            </Button>
        </form>
    )
}