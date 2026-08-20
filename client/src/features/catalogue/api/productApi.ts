import { apiFetch } from "../../../api/client";
import { type Product } from "../../../app/models/Product";
import { type Pagination } from "../../../app/models/Pagination";

type ProductQuery = {
    pageNumber: number;
    pageSize: number;
    searchTerm: string;
    selectedBrands: string[];
    selectedTypes: string[];
    orderBy: string;
};

type ProductFilters = {
    brands: string[];
    types: string[];
};

export async function getProducts({
    pageNumber,
    pageSize,
    searchTerm,
    selectedBrands,
    selectedTypes,
    orderBy
}: ProductQuery): Promise<Pagination<Product>> {

    const params = new URLSearchParams();

    params.set("pageNumber", pageNumber.toString());
    params.set("pageSize", pageSize.toString());

    if (searchTerm) {
        params.set("searchTerm", searchTerm);
    }

    if (orderBy) {
        params.set("orderBy", orderBy);
    }

    selectedBrands.forEach(brand => {
        params.append("brands", brand);
    });

    selectedTypes.forEach(type => {
        params.append("types", type);
    });

    return apiFetch<Pagination<Product>>(
        `/products?${params.toString()}`
    );
}

export function getProduct(id: string): Promise<Product> {
    return apiFetch<Product>(`/products/${id}`);
}

export function getProductFilters(): Promise<ProductFilters> {
    return apiFetch<ProductFilters>("/products/filters");
}