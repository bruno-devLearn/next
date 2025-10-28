"use client";

import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";
import { Filters } from "./_utils/(pages)/filters";
import { fecther } from "./_utils/(fetchs)/fecth";
import { useState } from "react";
import { Card } from "./_utils/(pages)/card";

export default function Home() {
    const [country, setCountry] = useState(""); // input controlado
    const [region, setRegion] = useState("All Regions");

    const { data, isPending } = useQuery({
        queryKey: ["dataAll", country, region], // ← muda conforme os filtros
        queryFn: () => fecther(country, region), // ← função dinâmica
    });

    return (
        <>
            <Filters
                country={country}
                setCountry={setCountry}
                region={region}
                setRegion={setRegion}
            />
            {isPending ? <Loading /> : null}
            {data?.length > 0 ? (
                <div className="cards">
                    {data?.map((country) => (
                        <Card country={country} key={country.cca3} />
                    ))}
                </div>
            ) : (
                <div className="not-found">
                    No countries found. Try adjusting your search or filter.
                </div>
            )}
        </>
    );
}
