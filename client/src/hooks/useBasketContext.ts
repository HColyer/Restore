import { useContext } from "react";
import { BasketContext } from "../store/providers/BasketProvider";

export default function useBasket() {
    const context = useContext(BasketContext);

    if (!context) {
        throw new Error(
            "useShoppingBasket must be used within a ShoppingBasketProvider"
        );
    }

    return context;
}