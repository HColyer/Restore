import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

export default function useProduct() {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("useProduct must be used inside ProductProvider")
    }

    return context;
}