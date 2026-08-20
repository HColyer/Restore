import { productReducer } from "./ProductReducer";
import { createContext, useEffect, useReducer, type Dispatch, type ReactNode } from "react";
import { getProducts, getProductFilters } from "../api/productApi";
import type { Product } from "../../../app/models/Product";
import type { ProductAction } from "./ProductReducer";
import handleApiError from "../../../api/handleApiError";
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
    selectedBrands: string[];
    selectedTypes: string[];
}

type ProductContextValue = {
    state: ProductState;
    dispatch: Dispatch<ProductAction>;
    setProducts: () => Promise<void>;
    searchProducts: (searchTerm: string) => void;
    fetchFilters: () => Promise<void>;
    toggleFilter: (name: string, category: "brand"|"type") => void
    clearFilters: () => void;
    increasePage: () => void;
    decreasePage: () => void;
    setOrderBy: (value: string) => void;
}

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
    types: [],
    selectedBrands: [],
    selectedTypes: []
};

export default function ProductProvider({ children }: Props) {
    const [state, dispatch] = useReducer(productReducer, initialState);
    const navigate = useNavigate();
    useEffect(() => {
        fetchFilters();
    }, []);

    useEffect(() => {
        setProducts();
    }, [
        state.pageNumber,
        state.pageSize,
        state.searchTerm,
        state.brands,
        state.types,
        state.selectedBrands,
        state.selectedTypes,
        state.orderBy
    ]);

    function increasePage() {
        dispatch({
            type: "SET_PAGE_NUMBER",
            payload: state.pageNumber + 1
        });
    }

    async function setProducts() {
        const { pageNumber, pageSize, searchTerm, selectedBrands, selectedTypes, orderBy } = state

        dispatch({ type: "SET_LOADING", payload: true });
        try {
            const products = await getProducts({
                pageNumber: pageNumber,
                pageSize: pageSize,
                searchTerm: searchTerm,
                selectedBrands: selectedBrands,
                selectedTypes: selectedTypes,
                orderBy: orderBy,

            })
            dispatch({ type: "SET_PRODUCTS", payload: products });
        } catch (error) {
            handleApiError(error, navigate);
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    }

    function searchProducts(searchTerm: string) {
        dispatch({
            type: "SET_SEARCH_TERM",
            payload: searchTerm
        })

    }

    function decreasePage() {
        dispatch({
            type: "SET_PAGE_NUMBER",
            payload: state.pageNumber - 1
        })
    }

    function setOrderBy (value: string) {
        dispatch({
            type: "SET_ORDER_BY",
            payload: value
        })
    }

    function toggleFilter(name: string, category: "brand" | "type") {
        if (category === "brand") {
            const brands = state.selectedBrands.includes(name)
                ? state.selectedBrands.filter(brand => brand !== name)
                : [...state.selectedBrands, name];

            dispatch({
                type: "SET_SELECTED_BRANDS",
                payload: brands
            });
        }

        if (category === "type") {
            const types = state.selectedTypes.includes(name)
                ? state.selectedTypes.filter(type => type !== name)
                : [...state.selectedTypes, name];

            dispatch({
                type: "SET_SELECTED_TYPES",
                payload: types
            });
        }
    }

    async function fetchFilters() {

        try {
            const filters = await getProductFilters();        
            dispatch({
                type: "SET_BRANDS",
                payload: filters.brands
            })
            dispatch({
                type: "SET_TYPES",
                payload: filters.types
            })
        } catch (error) {
            handleApiError(error, navigate)
        }

    }

    function clearFilters() {
        dispatch({
            type: "SET_SELECTED_BRANDS",
            payload: []
        })
        dispatch({
            type: "SET_SELECTED_TYPES",
            payload: []
        })
        dispatch({
            type: "SET_SEARCH_TERM",
            payload: ""
        })
        setOrderBy("name")
        setProducts();
        fetchFilters();
    }

    return (
        <ProductContext.Provider value={{ state, dispatch, fetchFilters, clearFilters, toggleFilter, setProducts, searchProducts, increasePage, decreasePage, setOrderBy }}>
            {children}
        </ProductContext.Provider >
    )
}

