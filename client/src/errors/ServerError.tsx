import ErrorContainer from "../components/ui/ErrorContainer"

export default function ServerError() {

    return (
        <ErrorContainer title="Network Error" message="Server may be down or your internet could be down" />
    )

}