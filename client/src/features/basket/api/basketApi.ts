import { apiFetch } from "../../../api/client";
import type { Basket } from "../../../app/models/Basket";

export function getBasket(): Promise<Basket> {
    return apiFetch<Basket>("/basket");
}

export function addItemToBasket(productId: number): Promise<Basket> {
    return apiFetch<Basket>(
        `/basket?productId=${productId}&quantity=1`,
        {
            method: "POST",
        }
    );
}

export function removeItemFromBasket(
    productId: number,
    quantity: number
): Promise<void> {
    return apiFetch<void>(
        `/basket?productId=${productId}&quantity=${quantity}`,
        {
            method: "DELETE",
        }
    );
}