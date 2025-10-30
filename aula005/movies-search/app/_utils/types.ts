export interface DataProps {
    Search: Search[];
    totalResults: string;
    Response: string;
}

interface Search {
    Title: string;
    Year: string;
    imdbID: string;
    Type: Type;
    Poster: string;
}

enum Type {
    Movie = "movie",
    Series = "series",
}
