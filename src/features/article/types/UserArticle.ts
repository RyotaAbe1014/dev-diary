export type UserArticle = {
    id: number;
    userId: string;
    title: string;
    description?: string;
    body?: string;
    isPublic: boolean;
}