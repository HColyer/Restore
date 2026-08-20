import type { SubmitEvent } from "react"
import Form from "../../components/ui/Form"
import Input from "../../components/ui/Input"

export default function LoginForm() {
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get("email")
        const password = formData.get("password")
        e.currentTarget.reset()
        console.log(email, password)
    }

    return (
        <Form text="Login" onSubmit={handleSubmit}>
            <Input label="Email" id="email" name="email" />
            <Input label="Password" id="password" name="password" type="password" />
        </Form>
    )
}