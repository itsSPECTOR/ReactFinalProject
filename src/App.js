import React, { useState, createContext, useEffect } from 'react'
import { Route, Redirect} from "react-router-dom";
import './App.css';

//layouts
import Home from './layouts/Home';
import NewPost from './layouts/NewPost'
import Archive from './layouts/Archive'
import Profile from './layouts/Profile'
import Analytics from './layouts/Analytics'

// components
import SideBar from './components/SideBar';
import PostsArr from './posts';
import pupArr from './pups'

import './dashforge/assets/css/dashforge.dashboard.css';
import './dashforge/assets/css/dashforge.css'

//creates importable object DataContext
export const DataContext = createContext() 
const userImport = 'https://randomuser.me/api'

function App() {

  // state
  const [posts, setPosts] = useState([...PostsArr]);
  const [userData, setUserData] = useState()
  const [pups, setPups] = useState([...pupArr])

  // bring in user api data
  useEffect(() => {
    const makeAPICall = async () =>{
      const res = await fetch(userImport)
      const json = await res.json()
        setUserData(json.results[0])
      }
    makeAPICall();
  }, []);

  const addPosts = (newPost) => {
    setPosts([newPost, ...posts]);
  }

  const addPup = (newPup) =>{
    setPups({newPup, ...pups})
  }
  
  console.log('POST ARRAY - ', pups)

  return (
    <div className='body'>
      <nav>
        {userData ? <SideBar userData={userData}/> : '...loading'}
      </nav>
      <main>
      <DataContext.Provider value={posts}>
          <Route exact path="/">
            {userData 
            ? <Home data={posts} userData={userData} addPup={addPup} pups={pups}/> 
            : '...loading'}
          </Route>
          <Route path="/create">
            <NewPost data={posts} addPosts={addPosts} postLimit={3}/>
          </Route>
          <Route path="/archive">
            <Archive data={posts}/>
          </Route>
          <Route path="/profile">
            <Profile userData={userData}/>
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Redirect to="/" />
      </DataContext.Provider>
      </main>
    </div>
  );
}

export default App;
