import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { v4 as uuidv4 } from 'uuid'

import { PostProps } from './Post.types'
import { Comment } from '../Comment'
import { Avatar } from '../Avatar'

import styles from './Post.module.css'
import { Modal } from '../Modal'

export const Post = ({ post }: PostProps) => {
    const [comments, setComments] = useState([
        { id: uuidv4(), content: 'Post muito bacana' },
    ]);
    const [newCommentText, setNewCommentText] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalCommentContent, setModalCommentContent] = useState('');

    const isNewCommentEmpty = newCommentText.length === 0;

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const handleCreateNewComment = (event: FormEvent) => {
        event.preventDefault();

        setComments([...comments, {
            id: uuidv4(),
            content: newCommentText
        }]);
        setNewCommentText('');
    }

    const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    const deleteComment = (commentToDelete: string) => {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment.id !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
        setIsModalOpen(false);
    }

    const handleModalOpen = (commentToDelete: string) => {
        setModalCommentContent(commentToDelete);
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <article className={styles.post} id={post.id}>
                <header className={styles.postHeader}>
                    <div className={styles.headerAuthor}>
                        <Avatar src={post.author.avatarUrl} />

                        <div className={styles.authorInfo}>
                            <strong> {post.author.name} </strong>
                            <span> {post.author.role} </span>
                        </div>
                    </div>

                    <time
                        className={styles.headerPublish}
                        title={publishedDateFormatted}
                        dateTime={post.publishedAt.toISOString()}
                    >
                        {publishedDateRelativeToNow}
                    </time>
                </header>

                <div className={styles.postContent}>
                    {post.content.map(line => {
                        if (line.type === 'paragraph') {
                            return (
                                <p key={line.content}> {line.content} </p>
                            );

                        } else if (line.type === 'link') {
                            return (
                                <p key={line.content}>
                                    <a href="#"> {line.content} </a>
                                </p>
                            );
                        }
                    })}

                    <p>

                        <a href="#"> #nlw </a>
                        <a href="#"> #rocketseat </a>
                    </p>
                </div>

                <form
                    className={styles.postComment}
                    onSubmit={handleCreateNewComment}
                >
                    <label> Deixe seu comentário </label>

                    <textarea
                        name="comment"
                        placeholder="Deixe um comentário..."
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentInvalid}
                        required
                    ></textarea>

                    <footer>
                        <button
                            type="submit"
                            disabled={isNewCommentEmpty}
                        >
                            Publicar
                        </button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return (
                            <Comment
                                key={comment.id}
                                id={comment.id}
                                content={comment.content}
                                onDeleteComment={() => handleModalOpen(comment.id)}
                            />
                        );
                    })}
                </div>
            </article>

            <Modal
                title="Excluir comentário"
                description="Você tem certeza que gostaria de excluir este comentário?"
                isOpenModal={isModalOpen}
                onModalClose={handleModalClose}
                onModalDeleteComment={deleteComment}
                commentId={modalCommentContent}
            />
        </>
    );
}
