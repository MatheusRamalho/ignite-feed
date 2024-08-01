'use client'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import Link from 'next/link'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { v4 as uuidv4 } from 'uuid'

import { Comment } from './comment'
import { Avatar } from './avatar'
import { Modal } from './modal'

import { PostType } from '@/types/Post'

export interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
        { id: uuidv4(), content: 'Post muito bacana' },
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalCommentContent, setModalCommentContent] = useState('')

    const isNewCommentEmpty = newCommentText.length === 0

    const publishedDateFormatted = format(
        post.publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'",
        {
            locale: ptBR,
        },
    )

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const handleCreateNewComment = (event: FormEvent) => {
        event.preventDefault()

        setComments([
            ...comments,
            {
                id: uuidv4(),
                content: newCommentText,
            },
        ])
        setNewCommentText('')
    }

    const handleNewCommentChange = (
        event: ChangeEvent<HTMLTextAreaElement>,
    ) => {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    const handleNewCommentInvalid = (
        event: InvalidEvent<HTMLTextAreaElement>,
    ) => {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    const deleteComment = (commentToDelete: string) => {
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return comment.id !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
        setIsModalOpen(false)
    }

    const handleModalOpen = (commentToDelete: string) => {
        setModalCommentContent(commentToDelete)
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <article
                className="rounded-lg bg-gray-800 mb-8 p-10 mt-8 first:mt-0 shadow"
                id={post.id}
            >
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar src={post.author.avatarUrl} />

                        <div className="">
                            <strong className=" block text-gray-100 leading-[1.6]">
                                {post.author.name}
                            </strong>

                            <span className="block text-sm text-gray-400 leading-[1.6]">
                                {post.author.role}
                            </span>
                        </div>
                    </div>

                    <time
                        className="text-sm text-gray-400"
                        title={publishedDateFormatted}
                        dateTime={post.publishedAt.toISOString()}
                    >
                        {publishedDateRelativeToNow}
                    </time>
                </header>

                <div className="leading-[1.6] text-gray-300 mt-6">
                    {post.content.map((line) => {
                        return (
                            <p
                                className="mt-4 text-gray-400"
                                key={line.content}
                            >
                                {line.type === 'paragraph' && line.content}
                                {line.type === 'link' && (
                                    <Link
                                        href="#"
                                        className="font-bold text-green-500 no-underline hover:text-green-300"
                                    >
                                        {line.content}
                                    </Link>
                                )}
                            </p>
                        )
                    })}

                    <p className="mt-4">
                        <Link
                            href="#"
                            className="font-bold text-green-500 no-underline hover:text-green-300"
                        >
                            #nlw
                        </Link>

                        <Link
                            href="#"
                            className="font-bold text-green-500 no-underline hover:text-green-300"
                        >
                            #rocketseat
                        </Link>
                    </p>
                </div>

                <form
                    className="post-comment w-full border-t-gray-600 mt-6 pt-6 border-t border-solid"
                    onSubmit={handleCreateNewComment}
                >
                    <label className="font-bold leading-[1.6] text-gray-100">
                        Deixe seu comentário
                    </label>

                    <textarea
                        className="resize-none w-full h-24 rounded-lg bg-gray-950 text-gray-100 leading-[1.4] mt-4 p-4 border-0 outline-green-500 focus-visible:border-green-500"
                        name="comment"
                        placeholder="Deixe um comentário..."
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentInvalid}
                        required
                    ></textarea>

                    <footer className="invisible max-h-0">
                        <button
                            className="cursor-pointer rounded-lg bg-green-500 font-bold text-white transition-colors duration-[0.2s] mt-4 px-6 py-4 border-0 hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:bg-green-500"
                            type="submit"
                            disabled={isNewCommentEmpty}
                        >
                            Publicar
                        </button>
                    </footer>
                </form>

                <div className="mt-8">
                    {comments.map((comment) => {
                        return (
                            <Comment
                                key={comment.id}
                                id={comment.id}
                                content={comment.content}
                                onDeleteComment={() =>
                                    handleModalOpen(comment.id)
                                }
                            />
                        )
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
    )
}
