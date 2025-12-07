"use client";

import { useGetData } from "../_utils/hooks";
import { useExplorer } from "../_utils/Store";
import Error from "../error";
import LoadingState from "../loading";
import { DataView } from "./DataView";
import { NotSearch } from "./Skeletons";

export function MainContent() {
    const { id } = useExplorer();
    const { data, isLoading, error } = useGetData(id);

    return (
        <div className="space-y-6">
            {isLoading ? <LoadingState /> : null}
            {error ? <Error error={error} /> : null}
            {data ? <DataView data={data} /> : null}
            {!id ? <NotSearch /> : null}
        </div>
    );
}
