export interface DataAllProps {
    flags: Flags;
    name: Name;
    tld: string[];
    cca3: string;
    currencies: Currencies;
    capital: string[];
    region: string;
    subregion: string;
    languages: Languages;
    borders: string[];
    population: number;
}

interface Currencies {
    GBP: Gbp;
}

interface Gbp {
    name: string;
    symbol: string;
}

interface Flags {
    png: string;
    svg: string;
    alt: string;
}

interface Languages {
    eng: string;
}

interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

interface NativeName {
    eng: Eng;
}

interface Eng {
    official: string;
    common: string;
}
