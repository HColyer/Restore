import type { SubmitEvent } from "react";
import Form from "../../components/ui/Form";
import Input from "../../components/ui/Input"

export default function RegisterForm() {
    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget

        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password !== confirmPassword) {
            alert("passwords need to match")
            return
        }

        const response = await fetch("https://localhost:5001/api/account/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        console.log("success", response.ok);
        console.log("Status:", response.status);


        form.reset()

    };
    return (
        <Form text="Sign Up" onSubmit={(e) => handleSubmit(e)} >
            <Input label="Name" id="name" name="name" />
            <Input label="Email" id="email" name="email" />
            <Input label="Password" id="password" type="password" name="password" />
            <Input label="Confirm Password" id="confirmPassword" name="confirmPassword" type="password" />

        </Form>
    )
}