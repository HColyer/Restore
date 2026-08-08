import type { Product } from "../../app/models/Product"
import type { BasketState } from "../providers/BasketProvider"

type AddItemAction = {
    type: "ADD",
    payload: Product
}

type DeleteItemAction = {
    type: "DELETE",
    payload: number
}

type DecreaseItemAction = {
    type: "DECREASE",
    payload: number
}

type BasketAction = AddItemAction | DeleteItemAction | DecreaseItemAction;

export function basketReducer(state: BasketState, action: BasketAction): BasketState {
    switch (action.type) {
        case "ADD": {
            const existingItem = state.items.find(
                item => item.product.id === action.payload.id
            );

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.product.id === action.payload.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1
                            }
                            : item
                    )
                };
            }

            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        product: action.payload,
                        quantity: 1
                    }
                ]
            };
        }
        case "DECREASE":
            return {
                ...state,
                items: state.items
                    .map(item =>
                        item.product.id === action.payload
                            ? {
                                ...item,
                                quantity: item.quantity - 1
                            }
                            : item
                    )
                    .filter(item => item.quantity > 0)
            };
        case "DELETE":
            return {
                ...state,
                items: state.items.filter(item => item.product.id !== action.payload)
            }
        default:
            return state;
    }
}