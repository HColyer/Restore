import { type ProductState } from "../providers/ProductProvider";
import type { Product } from "../../app/models/Product";
import type { Pagination } from "../../app/models/Pagination";

export type ProductAction =
  | { type: "SET_PRODUCTS"; payload: Pagination<Product> }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_PAGE_NUMBER"; payload: number }
  | { type: "SET_PAGE_SIZE"; payload: number }
  | { type: "SET_ORDER_BY"; payload: string }
  | { type: "SET_SEARCH_TERM"; payload: string }
  | { type: "SET_BRANDS"; payload: string[] }
  | { type: "SET_TYPES"; payload: string[] }
  | { type: "SET_SELECTED_BRANDS"; payload: string[] }
  | { type: "SET_SELECTED_TYPES"; payload: string[] };

export function productReducer(
  state: ProductState,
  action: ProductAction,
): ProductState {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pageNumber: action.payload.pageNumber,
        pageSize: action.payload.pageSize,
        totalCount: action.payload.totalCount,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SET_PAGE_NUMBER":
      return {
        ...state,
        pageNumber: action.payload,
      };

    case "SET_PAGE_SIZE":
      return {
        ...state,
        pageSize: action.payload,
      };

    case "SET_ORDER_BY":
      return {
        ...state,
        orderBy: action.payload,
      };

    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };

    case "SET_BRANDS":
      return {
        ...state,
        brands: action.payload,
      };
    case "SET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case "SET_SELECTED_BRANDS":
      return {
        ...state,
        selectedBrands: action.payload,
      };

    case "SET_SELECTED_TYPES":
      return {
        ...state,
        selectedTypes: action.payload,
      };
    default:
      return state;
  }
}
