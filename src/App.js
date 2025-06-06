import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { Route, Switch } from 'react-router-dom';
import { DataProvider } from './context/DataContext'

function App() {

  return (
    <div className="App">
      <Header title='React Js Blog'/>
      <DataProvider>
        <Nav/>

        <Switch>

          <Route exact path='/' component={Home}/>

          <Route exact path='/post' component={NewPost}/>

          <Route path='/edit/:id' component={EditPost} />

          {/* :id as an id is expected to be passed in the url */}
          <Route path='/post/:id' component={PostPage}/>

          {/* If the component wont recieve any props */}
          <Route path='/about' component={About}></Route>

          <Route path='*' component={Missing} />
          
        </Switch>
      </DataProvider>
      <Footer />
    </div>
  )
}

export default App
