import { createBrowserRouter } from "react-router";
import AuthProvider from "../../features/auth/context/AuthProvider";
import ThemeProvider from "../../features/theme/context/ThemeProvider";
import ProductProvider from "../../features/catalogue/context/ProductProvider";
import BasketProvider from "../../features/basket/context/BasketProvider";
import App from "../layout/App";
import Catalog from "../../features/catalogue/pages/CatalogPage";
import ProductPage from "../../features/catalogue/pages/ProductPage";
import BasketPage from "../../features/basket/page/BasketPage";
import AccountPage from "../../features/account/AccountPage";
import NotFound from "../../pages/NotFound";
import ServerError from "../../pages/ServerError";
import BadRequest from "../../pages/BadRequest";


export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AuthProvider>
                <ThemeProvider>
                    <ProductProvider>
                        <BasketProvider>
                            <App />
                        </BasketProvider>
                    </ProductProvider>
                </ThemeProvider>
            </AuthProvider>
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
                path: "/account",
                element: <AccountPage />
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