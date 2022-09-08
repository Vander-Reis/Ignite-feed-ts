import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css'
import styles from './App.module.css'

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// Content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Vander-Reis.png",
      name: "Vander Reis",
      role: "Web developer"
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera'
      },

      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeo no meu portifa...'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-09-06 20:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Web developer"
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera'
      },

      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeo no meu portifa...'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-05-10 20:00'),
  },
];

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return( 
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
