import './App.css';
import React, { useState, createContext, useEffect } from 'react'
import Home from './layouts/Home';
import SideBar from './components/SideBar';
import NewPost from './layouts/NewPost'
import { Route, Redirect} from "react-router-dom";
import PostsArr from './posts';
import userData from './hooks/userData';

import './dashforge/assets/css/dashforge.dashboard.css';
import './dashforge/assets/css/dashforge.css'

//creates importable object DataContext
export const DataContext = createContext() 
const userImport = 'https://randomuser.me/api'

function App() {

  // state
  const [posts, setPosts] = useState([...PostsArr]);
  const [userData, setUserData] = useState()

  useEffect(() => {
    const makeAPICall = async () =>{
      const res = await fetch(userImport)
      const json = await res.json()
        setUserData(json.results[0])
      }
    makeAPICall();
  }, []);

  // const addPosts = (addPost) => {
  //    setPosts([addPost, ...posts]);
  // }


  return (
    <div className='body'>
      <nav>
        {userData ? <SideBar userData={userData}/> : '...loading'}
      </nav>
      <main>
      <DataContext.Provider value={posts}>
          <Route exact path="/">
            {userData ? <Home data={posts} userData={userData}/> : '...loading'}
          </Route>
          <Route path="/create">
            <NewPost data={posts}/>
          </Route>
          <Redirect to="/" />
      </DataContext.Provider>
      </main>
    </div>
  );
}

export default App;
