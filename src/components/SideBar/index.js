import React from 'react'
import { 
  Activity, 
  Phone, 
  Gift, 
  Tag,
  Menu,
  MessageSquare,
  Bell,
  Globe,
  PlusSquare,
  Database,
  PieChart,
  LifeBuoy,
  User
} from 'react-feather'
import './styles.css'
import { Link } from 'react-router-dom'


const SideBar = (props) => {

  return(
    <aside className="aside aside-fixed d-flex flex-row justify-content-start bg-primary">

      <div className="vertical-menu  align-self-center">
        <a href="/" className="nav-link tx-white " data-toggle="tab">
          <span data-toggle="tooltip" title="ConnexcoTwo" data-placement="right"><Activity /></span>
        </a>
        <a href="/" className="nav-link tx-white-3" data-toggle="tab">
          <span data-toggle="tooltip" title="Support" data-placement="right"><Phone /></span>
        </a>
        <a href="/" className="nav-link tx-white-3" data-toggle="tab">
          <span data-toggle="tooltip" title="Rewards" data-placement="right"><Gift /></span>
        </a>
        <a href="/" className="nav-link tx-white-3" data-toggle="tab">
          <span data-toggle="tooltip" title="Wiki" data-placement="right"><Tag /></span>
        </a>
      </div>

    <div className="">
      <div className="aside-header">
        <a href="/" className="aside-logo">e<span>Company</span></a>
        <a href="/" className="aside-menu-link">
          <Menu />
          <i data-feather="x"></i>
        </a>
      </div>
      <div className="aside-body">
        <div className="aside-loggedin">
          <div className="d-flex align-items-center justify-content-start">
            <a href="/" className="avatar"><img src={props.userData.picture.medium} className="rounded-circle" alt=""></img></a>
            <div className="aside-alert-link">
              <a href="/" className="new" data-toggle="tooltip" title="You have 2 unread messages"><MessageSquare /></a>
              <a href="/" className="new" data-toggle="tooltip" title="You have 4 new notifications"><Bell /></a>
              <a href="/" data-toggle="tooltip" title="Sign out"><i data-feather="log-out"></i></a>
            </div>
          </div>
          <div className="aside-loggedin-user">
            <a href="/" className="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
              <h6 className="tx-semibold mg-b-0">{props.userData.name.first + ' ' + props.userData.name.last}</h6>
              <i data-feather="chevron-down"></i>
            </a>
            <p className="tx-color-03 tx-12 mg-b-0">{props.userData.location.country}</p>
          </div>
          <div className="collapse" id="loggedinMenu">
            <ul className="nav nav-aside mg-b-0">
              <li className="nav-item"><a href="/" className="nav-link"><i data-feather="edit"></i> <span>Edit Profile</span></a></li>
              <li className="nav-item"><a href="/" className="nav-link"><i data-feather="user"></i> <span>View Profile</span></a></li>
              <li className="nav-item"><a href="/" className="nav-link"><i data-feather="settings"></i> <span>Account Settings</span></a></li>
              <li className="nav-item"><a href="/" className="nav-link"><i data-feather="help-circle"></i> <span>Help Center</span></a></li>
              <li className="nav-item"><a href="/" className="nav-link"><i data-feather="log-out"></i> <span>Sign Out</span></a></li>
            </ul>
          </div>
        </div>
        <ul className="nav nav-aside">
          <li className="nav-label">Browse</li>
          <li className="nav-item nav-link">
            <Link to='/'><a href="/" className="nav-link"><Globe /> <span>Dashboard</span></a></Link>
          </li>
          <li className="nav-item nav-link">
            <Link to='/create'><a href="/" className="nav-link"><PlusSquare /> <span>Add Post</span></a></Link>
          </li>
          <li className="nav-item">
            <Link to='/analytics'>
              <a href="dashboard-two.html" className="nav-link"><PieChart /> <span>Analytics Overview</span></a>
            </Link>
          </li>
          <li className="nav-item"><a href="dashboard-three.html" className="nav-link disabled"><Database /> <span>Wiki [Coming Soon]</span></a></li>
          <li className="nav-item"><a href="dashboard-four.html" className="nav-link tx-gray-200 disabled"><LifeBuoy /> <span>Helpdesk [Coming Soon]</span></a></li>
          
          <li className="nav-label mg-t-25">Pages</li>
          <li className="nav-item">
            <Link to='/profile'>
              <a href="/" className="nav-link"><User /> <span>My Profile</span></a>
            </Link>
          </li>
          
          <li className="nav-label mg-t-25">Web Apps</li>
          <li className="nav-item"><a href="app-calendar.html" className="nav-link disabled"><i data-feather="calendar"></i> <span>Calendar</span></a></li>
          <li className="nav-item"><a href="app-chat.html" className="nav-link disabled"><i data-feather="message-square"></i> <span>Chat</span></a></li>
          <li className="nav-item"><a href="app-contacts.html" className="nav-link disabled"><i data-feather="users"></i> <span>Contacts</span></a></li>
          <li className="nav-item"><a href="app-file-manager.html" className="nav-link disabled"><i data-feather="file-text"></i> <span>File Manager</span></a></li>
          <li className="nav-item"><a href="app-mail.html" className="nav-link disabled"><i data-feather="mail"></i> <span>Mail</span></a></li>
        </ul>
      </div>
    </div>
  </aside>
  )
}

export default SideBar