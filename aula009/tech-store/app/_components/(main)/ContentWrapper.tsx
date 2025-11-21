import { DataProps } from "@/app/_utils/types";
import { Filters } from "./filters";
import { ProductsSection } from "./products-section";

export function ContentWrapper({ data }: { data: DataProps }) {
    return (
        <>
            <Filters />
            <ProductsSection data={data} />
        </>
    );
}
