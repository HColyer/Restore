import { createContext, useReducer, type ReactNode } from "react";
import { type Product } from "../../app/models/Product";
import { basketReducer } from "../reducers/BasketReducer";

type BasketItem = {
    product: Product,
    quantity: number
}

export type BasketState = {
    items: BasketItem[]
}

type BasketContextValue = BasketState & {
    addItem: (product: Product) => void,
    deleteItem: (id: number) => void,
    decreaseItem: (id: number) => void,
}

export const BasketContext = createContext<BasketContextValue | null>(null);

type Props = {
    children: ReactNode,
}

export default function BasketProvider({ children }: Props) {
    const [state, dispatch] = useReducer(basketReducer, {
        items: []
    })

    const addItem = (product: Product) => {
        dispatch({
            type: "ADD",
            payload: product
        });
    };

    const deleteItem = (id: number) => {
        dispatch({
            type: "DELETE",
            payload: id
        });
    };

    const decreaseItem = (id: number) => {
        dispatch({
            type: "DECREASE",
            payload: id
        })
    }

    return (
        <BasketContext.Provider value={{
            ...state,
            addItem,
            deleteItem,
            decreaseItem
        }} >
            {children}
        </BasketContext.Provider>
    )

}
