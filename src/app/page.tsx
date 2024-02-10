import { postsData } from '@/data/posts'

import { Post } from '@/components/Post'

export default function Home() {
    return postsData.map((post) => {
        return <Post key={post.id} post={post} />
    })
}
