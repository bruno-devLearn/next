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
