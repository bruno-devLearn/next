export interface PostsProps {
    data: Datum[];
    pagination: Pagination;
}

export interface Datum {
    id: number;
    title: string;
    body: string;
    userId: number;
    createdAt: string;
    updatedAt: string;
    user: User;
}

interface User {
    id: number;
    name: string;
    username: string;
}

export interface Pagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
}

export interface PostsBySearch extends Pagination {
    results: Datum[];
}
