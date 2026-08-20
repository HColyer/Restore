import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

export default function AccountPage() {
    return (
        <main className="pt-30 flex justify-center items-center min-h-screen">
            <LoginForm />
            <RegisterForm />
        </main>
    )
}