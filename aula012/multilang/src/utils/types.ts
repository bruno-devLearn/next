export interface User {
    email: string;
    password: string;
}

export interface isAuthProps {
    isAuth: boolean;
}

export interface AuthResponse {
    message: string;
    success?: boolean;
}

export interface Link {
    name: string;
    url: string;
}

export type Links = Link[];
