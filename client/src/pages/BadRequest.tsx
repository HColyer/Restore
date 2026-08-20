import Error from "../components/feedback/Error"

export default function BadRequest() {
    return (
        <Error
            title="400 - Bad Request"
            message="The request couldn't be processed because it was invalid."
        />

    )
}