import { IoMdArrowBack } from "react-icons/io";
import { fecther } from "@/app/_utils/(fetchs)/fecth";
import Image from "next/image";
import "./page.css";
import Link from "next/link";

// app/country/[country]/page.tsx
interface CountryPageProps {
    params: Promise<{ country: string }>;
}

export default async function Page({ params }: CountryPageProps) {
    const { country } = await params;

    const dt = await fecther(country, "All Regions");
    const data = dt[0];

    return (
        <div className="page">
            <Link href="/">
                <div className="back">
                    <div className="icon">
                        <IoMdArrowBack />
                    </div>
                    Back
                </div>
            </Link>
            <div className="info-div">
                <div className="img">
                    <Image
                        src={data.flags.png}
                        alt={data.flags.alt}
                        fill
                        unoptimized
                    />
                </div>
                <div className="infos">
                    <div className="name">{data.name.common}</div>
                    <div className="flex-container">
                        <div className="left">
                            <p className="info-p">
                                <span className="title">Native Name: </span>
                                {
                                    data.name.nativeName[
                                        Object.keys(data.name.nativeName)[0]
                                    ].common
                                }
                            </p>
                            <p className="info-p">
                                <span className="title">Population: </span>
                                {data.population}
                            </p>
                            <p className="info-p">
                                <span className="title">Region: </span>
                                {data.region}
                            </p>
                            <p className="info-p">
                                <span className="title">Sub Region: </span>
                                {data.subregion}
                            </p>
                            <p className="info-p">
                                <span className="title">Capital: </span>
                                {data.capital}
                            </p>
                        </div>
                        <div className="right">
                            <p className="info-p">
                                <span className="title">
                                    Top Level Domain:{" "}
                                </span>
                                {data.tld}
                            </p>
                            <p className="info-p">
                                <span className="title">Currencies: </span>
                                {Object.values(data.currencies)[0].name}
                            </p>
                            <p className="info-p">
                                <span className="title">Languages: </span>
                                {Object.values(data.languages).join(", ")}
                            </p>
                        </div>
                    </div>
                    {data.borders.length > 0 ? (
                        <div className="border-countries">
                            <div className="title">Border Countries:</div>
                            <div className="borders">
                                {data.borders.map((country) => (
                                    <div className="country-btn" key={country}>
                                        {country}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
