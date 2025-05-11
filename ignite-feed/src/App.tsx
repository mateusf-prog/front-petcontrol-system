import { Post } from './components/Post'
import { Header } from './components/Header'

export default function App() {
  return (
    <div>
      <Header></Header>
      <Post
      author= "Mateus Fonseca"
      post= "Texto teste"
      />
      <Post
      author = "Taianra"
      post = "Texto 2"
      />
    </div>
  )
}
