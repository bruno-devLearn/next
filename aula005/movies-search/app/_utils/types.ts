export interface DataProps {
    Search: Search[];
    totalResults: string;
    Response: string;
}

export interface Search {
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

export interface MovieProps {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

interface Rating {
    Source: string;
    Value: string;
}
