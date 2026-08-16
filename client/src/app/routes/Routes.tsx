import { createBrowserRouter } from "react-router";
import ThemeProvider from "../../store/providers/ThemeProvider";
import ProductProvider from "../../store/providers/ProductProvider";
import BasketProvider from "../../store/providers/BasketProvider";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catelog";
import ProductPage from "../../features/catalog/ProductPage";
import BasketPage from "../../features/basket/BasketPage";
import NotFound from "../../errors/NotFound";
import ServerError from "../../errors/ServerError";
import BadRequest from "../../errors/BadRequest";


export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ThemeProvider>
                <ProductProvider>
                    <BasketProvider>
                        <App />
                    </BasketProvider>
                </ProductProvider>
            </ThemeProvider>
        ),
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
            },
            {
                path: "*",
                element: <NotFound />
            },
            {
                path: "/bad-request",
                element: <BadRequest />
            },
            {
                path: "/server-error",
                element: <ServerError />
            }
        ]
    },

])