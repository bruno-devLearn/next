"use client";

import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";
import { Filters } from "./_utils/(pages)/filters";
import { fecther } from "./_utils/(fetchs)/fecth";
import { useState } from "react";

export default function Home() {
    const [country, setCountry] = useState(""); // input controlado
    const [region, setRegion] = useState("All Regions");

    const { data, isPending } = useQuery({
        queryKey: ["dataAll", country, region], // ← muda conforme os filtros
        queryFn: () => fecther(country, region), // ← função dinâmica
    });
    console.log(data);

    return (
        <>
            <Filters
                country={country}
                setCountry={setCountry}
                region={region}
                setRegion={setRegion}
            />
            {isPending ? <Loading /> : null}
            {/* content here*/}
        </>
    );
}
