import { StaticImageData } from 'next/image'

export interface PostAuthor {
    avatarUrl: StaticImageData | string
    name: string
    role: string
}

export interface PostContent {
    type: 'paragraph' | 'link'
    content: string
}

export interface PostType {
    id: string
    author: PostAuthor
    content: PostContent[]
    publishedAt: Date
}
