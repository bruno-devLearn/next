import Image from "next/image";
import "./card.css";
import Link from "next/link";

export function Card({ country }) {
    return (
        <Link href={`/country/${country.cca3}`}>
            <div className="card">
                <div className="img">
                    <Image
                        src={country?.flags.png}
                        alt={country?.flags.alt}
                        fill
                        unoptimized
                    />
                </div>
                <div className="info">
                    <div className="name">{country.name.common}</div>
                    <div className="characteristics">
                        <div className="text">
                            <span className="title">Population:</span>{" "}
                            {country.population}
                        </div>
                        <div className="text">
                            <span className="title">Region:</span>{" "}
                            {country.region}
                        </div>
                        <div className="text">
                            <span className="title">Capital:</span>{" "}
                            {country.capital}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
