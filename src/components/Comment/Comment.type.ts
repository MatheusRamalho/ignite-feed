export type CommentProps = {
    id: string;
    content: string;
    onDeleteComment: (comment: string) => void;
}
