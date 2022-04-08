import React from 'react'

const TopNav = () => {
  return(
    <div className="content-header">
      <div className="content-search">
        <i data-feather="search"></i>
        <input type="search" className="form-control" placeholder="Search..."></input>
      </div>
      <nav className="nav">
        <a href="" className="nav-link"><i data-feather="help-circle"></i></a>
        <a href="" className="nav-link"><i data-feather="grid"></i></a>
        <a href="" className="nav-link"><i data-feather="align-left"></i></a>
      </nav>
    </div>
  )
}

export default TopNav