import { useParams, Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './context/DataContext';
import api from './api/posts'

const PostPage = () => {

    const { posts, setPosts } = useContext(DataContext)
    // Extract the `id` from the URL
    const { id } = useParams()
    const history = useHistory()
    const post = posts.find(post => (post.id).toString() === id)

    const handleDelete = async (id) => {
        try {
          // no response just delete
          await api.delete(`/posts/${id}`)
          const newPosts = posts.filter((post) => post.id !== id)
          setPosts(newPosts)
          history.push('/')
        } catch(err) {
            console.log(`Error: ${err.message}`)
        }
    }

    return (
        <main className='PostPage'>
            <article className='post'>
                {/* If a post is present i.e post doesnt return undefined */}
                {post &&
                <>
                    <h2>{post.title}</h2>
                    <p className='postDate'>{post.datetime}</p>
                    <p className='postBody'>{post.body}</p>
                    <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
                    <button className='deleteButton' onClick={() => {handleDelete(post.id)}}>Delete Post</button>
                </>
                }

                {/* If no post */}
                {!post && 
                <>
                    <h2>Post Not Found</h2>
                    <Link to='/'>Back to Home</Link>
                </>
                }


            </article>
        </main>
    )
}

export default PostPage