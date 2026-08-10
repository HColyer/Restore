import { useNavigate } from "react-router";

export default function handleApiError(error: unknown, navigate: ReturnType<typeof useNavigate>) {
    if (error instanceof Response) {
        switch (error.status) {
            case 400:
                navigate("/bad-request");
                break;
            case 404:
                navigate("/not-found");
                break;
            case 500:
                navigate("/server-error");
                break;
            default:
                navigate("/server-error");
        }
    }
}