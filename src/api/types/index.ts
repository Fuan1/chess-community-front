export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
}
