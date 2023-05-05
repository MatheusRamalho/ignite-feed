import { AuthorType } from "./PostAuthor";
import { ContentType } from "./PostContent";

export type PostType = {
    id: string;
    author: AuthorType;
    content: ContentType[];
    publishedAt: Date;
}
