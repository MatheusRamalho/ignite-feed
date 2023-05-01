import { useState } from 'react'
import { ThumbsUp, Trash } from '@phosphor-icons/react'

import { CommentProps } from './Comment.type'
import { Avatar } from '../Avatar'

import styles from './Comment.module.css'

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    const handleLikeComment = () => {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <article className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="http://www.github.com/matheusramalho.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.commentAuthorAndTime}>
                            <strong> Matheus Ramalho </strong>

                            <time
                                title="11 de maior às 08:13h"
                                dateTime="2022-05-03 08:13:17"
                            >
                                cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p> {content} </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={24} />
                        Aplaudir <span> {likeCount} </span>
                    </button>
                </footer>
            </div>
        </article>
    );
}
