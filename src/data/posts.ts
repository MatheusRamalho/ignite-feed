import { v4 as uuidv4 } from 'uuid'

import { PostType } from '@/types/post'

import avatarImg from '@/assets/imgs/user.jpeg'

export const postsData: PostType[] = [
    {
        id: uuidv4(),
        author: {
            avatarUrl: avatarImg,
            name: 'Matheus Ramalho Silva',
            role: 'Web Developer',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-05-03 20:00:00'),
    },

    {
        id: uuidv4(),
        author: {
            avatarUrl: avatarImg,
            name: 'Vívian Ribeiro',
            role: 'Web Design',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2023-04-30 16:46:34'),
    },
]
