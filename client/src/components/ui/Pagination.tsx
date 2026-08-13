import Button from "./Button";

type Props = {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
};

export default function Pagination({
    currentPage,
    totalPages,
    onPrevious,
    onNext
}: Props) {
    return (
        <>
            <div className="w-80 mx-auto grid grid-cols-3 gap items-center my-12">
                <div>
                    <Button
                        className={currentPage === 1 ? "hidden btn" : "btn"}
                        onClick={onPrevious}
                    >
                        Previous
                    </Button>
                </div>

                <div className="px-8">
                    <p className="text-center">
                        {currentPage} of {totalPages}
                    </p>
                </div>

                <div className="flex">
                    <Button
                        className={currentPage === totalPages ? "hidden btn" : "btn"}
                        onClick={onNext}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
}