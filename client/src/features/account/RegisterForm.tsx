import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"

export default function RegisterForm() {
    return (
        <form className="flex flex-col bg-zinc-100 dark:bg-zinc-900 p-6 space-y-8" >

            <div className="flex flex-col space-y-3">
                <Input label="Name" id="name" />
                <Input label="Email" id="email" />
                <Input label="Password" id="password" />
                <Input label="Re-enter password" id="password" />

            </div>

            <Button onClick={(e) => e.preventDefault()}>
                Login
            </Button>

        </form>
    )
}