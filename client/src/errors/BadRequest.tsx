import ErrorContainer from "../components/ui/ErrorContainer"

export default function BadRequest() {
    return (
        <ErrorContainer
            title="400 - Bad Request"
            message="The request couldn't be processed because it was invalid."
        />

    )
}