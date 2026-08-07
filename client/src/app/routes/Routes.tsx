import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import ProductPage from "../../features/catalog/ProductPage";
import BasketPage from "../../features/basket/BasketPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Catalog />
            },
            {
                path: "/product/:id",
                element: <ProductPage />
            },
            {
                path: "/basket",
                element: <BasketPage />
            }
        ]
    },

])