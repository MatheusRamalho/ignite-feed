import './styles/global.css'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Post } from './components/Post'

import { postsData } from './storage/posts'

export const App = () => {
    return (
        <DefaultLayout>
            {postsData.map((post) => {
                return <Post key={post.id} post={post} />
            })}
        </DefaultLayout>
    )
}
