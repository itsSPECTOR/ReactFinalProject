import React from 'react'
import { Circle } from 'react-feather'
import { Search, HelpCircle, Grid, LogIn} from 'react-feather'

const TopNav = () => {
  return(
    <div className="content-header">
      <div className="content-search">
        <Search />
        <input type="search" className="form-control" placeholder="Search..."></input>
      </div>
      <nav className="nav">
        <a href="" className="nav-link"><HelpCircle /></a>
        <a href="" className="nav-link"><Grid /></a>
        <a href="" className="nav-link"><LogIn /></a>
      </nav>
    </div>
  )
}

export default TopNav