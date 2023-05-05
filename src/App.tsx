import { v4 as uuidv4 } from 'uuid'

import './styles/global.css'

import { PostType } from './types/Post'
import { Layout } from './components/Layout'
import { Post } from './components/Post'

const posts: PostType[] = [
	{
		id: uuidv4(),
		author: {
			avatarUrl: 'http://www.github.com/matheusramalho.png',
			name: 'Matheus Ramalho Silva',
			role: 'Web Developer'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{ type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
			{ type: 'link', content: 'jane.design/doctorcare' }
		],
		publishedAt: new Date('2022-05-03 20:00:00'),
	},

	{
		id: uuidv4(),
		author: {
			avatarUrl: 'http://www.github.com/matheusramalho.png',
			name: 'Vívian Ribeiro',
			role: 'Web Design'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{ type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
			{ type: 'link', content: 'jane.design/doctorcare' }
		],
		publishedAt: new Date('2023-04-30 16:46:34'),
	},
];

export const App = () => {
	return (
		<Layout>
			{posts.map(post => {
				return (
					<Post
						key={post.id}
						post={post}
					/>
				);
			})}
		</Layout>
	)
}
