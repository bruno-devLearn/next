export interface DataAllProps {
    name: Name;
    capital: string[];
    region: string;
    population: number;
}

interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

interface NativeName {
    nep: NEP;
}

interface NEP {
    official: string;
    common: string;
}
