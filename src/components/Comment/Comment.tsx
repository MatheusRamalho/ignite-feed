'use client'

import { useState } from 'react'

import { Avatar } from '../Avatar'
import { Icon } from '../Icon'

import avatarImg from '@/assets/imgs/user.jpeg'

interface CommentProps {
    id: string
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ id, content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikeComment = () => {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <article className="flex gap-4 mt-6 flex-col sm:flex-row" id={id}>
            <Avatar hasBorder={false} src={avatarImg} />

            <div className="flex-1">
                <div className="bg-gray-700 rounded-lg p-4">
                    <header className="flex items-start justify-between">
                        <div className="">
                            <strong className="block text-sm leading-[1.6] text-white">
                                Matheus Ramalho
                            </strong>

                            <time
                                className="block text-xs leading-[1.6] text-gray-400"
                                title="11 de maior às 08:13h"
                                dateTime="2022-05-03 08:13:17"
                            >
                                cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            className="cursor-pointer rounded-sm bg-transparent text-gray-400 leading-[0] border-0 hover:text-red-500"
                            onClick={handleDeleteComment}
                            title="Deletar comentário"
                        >
                            <Icon name="trash-2" customClass="size-6" />
                        </button>
                    </header>

                    <p className="text-gray-400 mt-4"> {content} </p>
                </div>

                <footer className="w-full mt-4">
                    <button
                        className="cursor-pointer bg-transparent text-gray-400 flex items-center rounded-sm border-0 hover:text-green-300"
                        onClick={handleLikeComment}
                    >
                        <Icon name="thumbs-up" customClass="size-6 mr-2" />
                        Aplaudir
                        <span className="before:content-['.'] before:px-1">
                            {likeCount}
                        </span>
                    </button>
                </footer>
            </div>
        </article>
    )
}
