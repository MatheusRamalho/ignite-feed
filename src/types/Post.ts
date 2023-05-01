import { AuthorType } from "./PostAuthor";
import { ContentType } from "./PostContent";

export type PostType = {
    id: number;
    author: AuthorType;
    content: ContentType[];
    publishedAt: Date;
}
