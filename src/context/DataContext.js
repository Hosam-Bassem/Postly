import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';

// Initializing a new context obj
const DataContext = createContext({})

// This DataProvider will provide the data to different components
// children - refers to the components that are within the DataProvider
export const DataProvider = ({ children }) => {

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')

  useEffect(() => {
    setPosts(data)
  }, [data])

  useEffect(() => {

    const filteredResults = posts.filter((post) => 
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse())
  }, [posts, search])

    return (
        // data props will be passed to this value
        <DataContext.Provider value={{
          search,
          setSearch,
          searchResults,
          fetchError,
          isLoading,
          posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext




