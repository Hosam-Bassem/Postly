import { useEffect, useContext, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom'
import DataContext from './context/DataContext';
import api from './api/posts';
import { format } from 'date-fns';

const EditPost = () => {

    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    const history = useHistory();
    const { posts, setPosts } = useContext(DataContext)

    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    useEffect(() => {
        if(post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp')
        const updatedPost = {
          id: id,
          title: editTitle,
          datetime: datetime,
          body: editBody
        }
    
        try {
          // could use patch but since updating all fields PUT is better
          const response = await api.put(`posts/${id}`, updatedPost)
          
          /* Using map to apply a function that is to update a post rather than copying the old posts like before:
             const postList = [...posts, response.data] => this will include the post thats not edited */
          setPosts(posts.map(post => post.id === id ? {...response.data} : post))
    
          // resets for the input components
          setEditTitle('') 
          setEditBody('')
    
          history.push('/')
        } catch(err) {
          console.log(`Error: ${err.message}`)
        }
    }

    return (
        <main className='NewPost'>
            {editTitle && 
                <>
                    <h2>Edit Post</h2>

                    <form onSubmit={(e) => e.preventDefault()} className='newPostForm'>

                        <label htmlFor='postTitle'>Title:</label>
                        <input
                            type='text'
                            id='postTitle'
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            placeholder=""
                        />

                        <label htmlFor='postBody'>Post:</label>
                        <textarea 
                            id='postBody'
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        >
                        </textarea>

                        <button type='submit' onClick={() => handleEdit(post.id)}>Edit</button>

                    </form>
                </>
            }

            {!editTitle && 
                <>
                    <h2>Page Not Found</h2>
                    <Link to='/'>Back to home</Link>
                </>
            }
      </main>
    )
}

export default EditPost