import ErrorContainer from "../components/ui/ErrorContainer"

export default function NotFoundError() {

    return (
        <ErrorContainer title="404 Not Found" message="We couldn't find what you were looking for. It may have been moved or no longer exists." />
    )

}