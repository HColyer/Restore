import { productReducer } from "../reducers/ProductReducer";
import { createContext, useEffect, useReducer, type Dispatch, type ReactNode } from "react";
import type { Product } from "../../app/models/Product";
import type { ProductAction } from "../reducers/ProductReducer";
import type { Pagination } from "../../app/models/Pagination";
import handleApiError from "../../api/handleApiError";
import { useNavigate } from "react-router";


export type ProductState = {
    products: Product[];
    loading: boolean;
    pageNumber: number;
    pageSize: number;
    orderBy: string;
    totalCount: number;
    searchTerm: string;
    brands: string[];
    types: string[];
}

type ProductContextValue = {
    state: ProductState;
    dispatch: Dispatch<ProductAction>;
    fetchProducts: (pageNumber: number, pageSize: number) => Promise<void>;
    increasePage: () => void;
    decreasePage: () => void;
};

export const ProductContext = createContext<ProductContextValue | null>(null);

type Props = {
    children: ReactNode;
};

const initialState: ProductState = {
    products: [],
    loading: false,
    pageNumber: 1,
    pageSize: 12,
    totalCount: 0,
    orderBy: "name",
    searchTerm: "",
    brands: [],
    types: []
};

export default function ProductProvider({ children }: Props) {
    const [state, dispatch] = useReducer(productReducer, initialState);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts(state.pageNumber, state.pageSize);
    }, [state.pageNumber, state.pageSize]);

    function increasePage() {
        dispatch({
            type: "SET_PAGE_NUMBER",
            payload: state.pageNumber + 1
        });
    }

    async function fetchProducts(pageNumber: number, pageSize: number) {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
            const response = await fetch(`https://localhost:5001/api/products?pageNumber=${pageNumber}&pageSize=${pageSize}`);
            // api handler needs a response object to check the status code, 
            // so we throw the response if it's not ok
            if (!response.ok) throw response;
            const data: Pagination<Product> = await response.json();
            dispatch({ type: "SET_PRODUCTS", payload: data });
        } catch (error) {
            handleApiError(error, navigate);
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    }

    function decreasePage() {
        dispatch({
            type: "SET_PAGE_NUMBER",
            payload: state.pageNumber - 1
        })  
    }


    return (
        <ProductContext.Provider value={{state, dispatch, fetchProducts, increasePage, decreasePage}}>
            {children}
        </ProductContext.Provider >
    )
}

