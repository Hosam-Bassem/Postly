import { useContext, useState } from 'react';
import DataContext from './context/DataContext';
import api from './api/posts';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';

const NewPost = () => {

    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const { posts, setPosts } = useContext(DataContext)
    const history = useHistory()

    const handleSubmit = async (e) => {
      e.preventDefault()
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1
      const datetime = format(new Date(), 'MMMM dd, yyyy pp')
      const newPost = {
        id: id,
        title: postTitle,
        datetime: datetime,
        body: postBody
      }
      
      try {
        const response = await api.post('./posts', newPost)
        const postList = [...posts, response.data] // because what we send gets sent back from the api as a confirmation
        setPosts(postList)
        setPostTitle('') //reseting the post title input component
        setPostBody('')
        history.push('/')
      } catch(err) {
        console.log(`Error: ${err.message}`)
      }
    }

    return (
       <main className='NewPost'>
         <h2>New Post</h2>

         <form onSubmit={handleSubmit} className='newPostForm'>

            <label htmlFor='postTitle'>Title:</label>
            <input
              type='text'
              id='postTitle'
              required
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              placeholder=""
            />

            <label htmlFor='postBody'>Post:</label>
            <textarea 
              id='postBody'
              required
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
            >
            </textarea>

            <button type='submit'>Post</button>

         </form>
       </main>
    )
}

export default NewPost