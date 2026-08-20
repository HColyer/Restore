import Error from "../components/feedback/Error"

export default function ServerError() {

    return (
        <Error title="Network Error" message="Server may be down or your internet could be down" />
    )

}