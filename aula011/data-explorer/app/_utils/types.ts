// user interface
export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

// posts interface
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// comments interface
export interface CommentsProps {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
