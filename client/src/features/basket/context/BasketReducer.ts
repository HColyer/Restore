import type { BasketState } from "./BasketProvider"
import type { Basket } from "../../../app/models/Basket"

type SetBasketAction ={
    type: "SET_BASKET",
    payload: Basket
}

type ClearBasketAction = {
    type: "CLEAR_BASKET"
}

type BasketAction = SetBasketAction | ClearBasketAction;

export function basketReducer(state: BasketState, action: BasketAction): BasketState {
    switch(action.type) {
        case "SET_BASKET":
            return {
                ...state,
                basket: action.payload
            }
        case "CLEAR_BASKET":
            return {
                ...state,
                basket: null
            }
        default:
            return state;
    }   
}














// type AddItemAction = {
//     type: "ADD",
//     payload: Product
// }

// type DeleteItemAction = {
//     type: "DELETE",
//     payload: number
// }

// type DecreaseItemAction = {
//     type: "DECREASE",
//     payload: number
// }

// type BasketAction = AddItemAction | DeleteItemAction | DecreaseItemAction;

// export function basketReducer(state: BasketState, action: BasketAction): BasketState {
//     switch (action.type) {
//         case "ADD": {
//             const existingItem = state.items.find(
//                 item => item.product.id === action.payload.id
//             );

//             if (existingItem) {
//                 return {
//                     ...state,
//                     items: state.items.map(item =>
//                         item.product.id === action.payload.id
//                             ? {
//                                 ...item,
//                                 quantity: item.quantity + 1
//                             }
//                             : item
//                     )
//                 };
//             }

//             return {
//                 ...state,
//                 items: [
//                     ...state.items,
//                     {
//                         product: action.payload,
//                         quantity: 1
//                     }
//                 ]
//             };
//         }
//         case "DECREASE":
//             return {
//                 ...state,
//                 items: state.items
//                     .map(item =>
//                         item.product.id === action.payload
//                             ? {
//                                 ...item,
//                                 quantity: item.quantity - 1
//                             }
//                             : item
//                     )
//                     .filter(item => item.quantity > 0)
//             };
//         case "DELETE":
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.product.id !== action.payload)
//             }
//         default:
//             return state;
//     }
// }