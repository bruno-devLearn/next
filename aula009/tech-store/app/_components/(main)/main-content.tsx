"use client";

import { useShop } from "@/app/_utils/store";
import { useCategories, useProducts } from "@/app/_utils/useProducts";
import { ContentWrapper } from "./ContentWrapper";
import Error from "@/app/error";
import Loading from "@/app/loading";
import "./main.css";

export function MainContent() {
    const { searchValue, globalId, selectedCategs } = useShop();

    const {
        data,
        isLoading: productsLoading,
        isError: productsError,
    } = useProducts(searchValue, globalId, selectedCategs);

    const { isLoading: categoriesLoading, isError: categoriesError } =
        useCategories();

    const isLoading = productsLoading || categoriesLoading;
    const isError = productsError || categoriesError;

    return (
        <div className="main-content">
            <div className="content-wrapper">
                {isLoading ? <Loading /> : null}
                {isError ? <Error /> : null}
                {data ? <ContentWrapper data={data} /> : null}
            </div>
        </div>
    );
}
