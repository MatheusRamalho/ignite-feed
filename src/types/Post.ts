export type PostAuthor = {
    avatarUrl: string
    name: string
    role: string
}

export type PostContent = {
    type: 'paragraph' | 'link'
    content: string
}

export type PostType = {
    id: string
    author: PostAuthor
    content: PostContent[]
    publishedAt: Date
}
