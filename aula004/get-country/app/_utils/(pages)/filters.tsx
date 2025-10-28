import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import "./filters.css";
import { useState } from "react";

const regions = [
    "All Regions",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
];

interface FiltersProps {
    country: string;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    region: string;
    setRegion: React.Dispatch<React.SetStateAction<string>>;
}

export function Filters({
    country,
    setCountry,
    region,
    setRegion,
}: FiltersProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="filter-bar">
            <div className="input">
                <div className="icon">
                    <CiSearch />
                </div>
                <input
                    type="text"
                    placeholder="Search for a country..."
                    value={country}
                    onChange={(e) => {
                        setCountry(e.target.value);
                        setRegion("All Regions");
                    }}
                />
            </div>
            <button className="select" onClick={() => setIsOpen(true)}>
                <span>{region}</span>
                <div className="icon">
                    <FaAngleDown />
                </div>
            </button>
            {isOpen ? (
                <div className="region-filter">
                    {regions.map((reg, index) => (
                        <div
                            className="region"
                            key={index}
                            onClick={() => {
                                setRegion(reg);
                                setCountry("");
                                setIsOpen(false);
                            }}
                        >
                            {reg}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}
