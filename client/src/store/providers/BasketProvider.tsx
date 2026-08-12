import { createContext, useEffect, useReducer, type ReactNode } from "react";
import { basketReducer } from "../reducers/BasketReducer";
import type { Basket } from "../../app/models/Basket";

export type BasketState = {
    basket: Basket | null,
}

type BasketContextValue = BasketState & {
    getBasket: () => Promise<void>,
    addItemToBasket: (productId: number) => Promise<void>,
    clearBasket: (productId: number, quantity: number) => Promise<void>,
    // deleteItem: (id: number) => void,
    // decreaseItem: (id: number) => void,
}

export const BasketContext = createContext<BasketContextValue | null>(null);

type Props = {
    children: ReactNode,
}

export default function BasketProvider({ children }: Props) {
    const [state, dispatch] = useReducer(basketReducer, {
        basket: null
    });

    useEffect(() => {
        getBasket();
    }, []);

    const getBasket = async () => {
        // Talk to API
        const response = await fetch("https://localhost:5001/api/basket", {
            credentials: "include",
        })
        // Get basket back
        if(!response.ok) throw Error("Fail");
        const basket: Basket = await response.json()
        dispatch({
            type: "SET_BASKET",
            payload: basket
        })
        // Give basket to reducer
    };

    const addItemToBasket = async (productId: number) => {
        // Talk to API
        const response = await fetch(`https://localhost:5001/api/basket/?productId=${productId}&quantity=1`, {
            method: "POST",
            credentials: "include",
        });
        // Get updated basket back
        if(!response.ok) throw Error("Failed to add item to basket");
        const basket: Basket = await response.json();
        dispatch({
            type: "SET_BASKET",
            payload: basket
        });
    };

    const clearBasket = async (productId: number, quantity: number) => {
        const response = await fetch(`https://localhost:5001/api/basket?productId=${productId}&quantity=${quantity}`, {
            method: "DELETE",
            credentials: "include",
        });
        if(!response.ok) throw Error("Failed to delete item")
        dispatch({
            type: "CLEAR_BASKET",
        });
        getBasket();
    };    

    return (
        <BasketContext.Provider value={{
            getBasket,
            addItemToBasket,
            clearBasket,
            ...state
        }} >
            {children}
        </BasketContext.Provider>
    );

}
