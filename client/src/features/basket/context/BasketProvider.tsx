import { createContext, useEffect, useReducer, type ReactNode } from "react";
import { basketReducer } from "./BasketReducer";
import type { Basket } from "../../../app/models/Basket";
import {
    getBasket,
    addItemToBasket,
    removeItemFromBasket
} from "../api/basketApi";

export type BasketState = {
    basket: Basket | null;
};

type BasketContextValue = BasketState & {
    getBasket: () => Promise<void>;
    addItemToBasket: (productId: number) => Promise<void>;
    clearBasket: (productId: number, quantity: number) => Promise<void>;
};

export const BasketContext = createContext<BasketContextValue | null>(null);

type Props = {
    children: ReactNode;
};

export default function BasketProvider({ children }: Props) {
    const [state, dispatch] = useReducer(basketReducer, {
        basket: null
    });

    useEffect(() => {
        getBasketData();
    }, []);

    async function getBasketData() {
        try {
            const basket = await getBasket();

            dispatch({
                type: "SET_BASKET",
                payload: basket
            });
        } catch (error) {
            console.error(error);
        }
    }

    async function addItem(productId: number) {
        try {
            const basket = await addItemToBasket(productId);

            dispatch({
                type: "SET_BASKET",
                payload: basket
            });
        } catch (error) {
            console.error(error);
        }
    }

    async function clearBasket(productId: number, quantity: number) {
        try {
            await removeItemFromBasket(productId, quantity);

            await getBasketData();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <BasketContext.Provider
            value={{
                basket: state.basket,
                getBasket: getBasketData,
                addItemToBasket: addItem,
                clearBasket
            }}
        >
            {children}
        </BasketContext.Provider>
    );
}