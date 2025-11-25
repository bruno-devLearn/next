export interface DataProps {
    data: Datum[];
    pagination: Pagination;
}

export interface Datum {
    id: number;
    title: string;
    body: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}

export interface User {
    id: number;
    name: Name;
    username: Username;
}

export enum Name {
    JohnDoe = "John Doe",
}

export enum Username {
    Johndoe = "johndoe",
}

export interface Pagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
}
