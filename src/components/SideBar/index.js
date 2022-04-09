import React from 'react'
import { 
  Activity, 
  Phone, 
  Gift, 
  Tag,
  Menu,
  CheveronRight,
  MessageSquare,
  Bell
} from 'react-feather'

const SideBar = () => {
  return(
    <aside className="aside aside-fixed d-flex flex-row justify-content-start">

      <div className="platform-nav">
        <a href="" className="nav-link active" data-toggle="tab">
          <span data-toggle="tooltip" title="ConnexcoTwo" data-placement="right"><Activity /></span>
        </a>
        <a href="" className="nav-link tx-gray-500" data-toggle="tab">
          <span data-toggle="tooltip" title="Support" data-placement="right"><Phone /></span>
        </a>
        <a href="" className="nav-link tx-gray-500" data-toggle="tab">
          <span data-toggle="tooltip" title="Rewards" data-placement="right"><Gift /></span>
        </a>
        <a href="" className="nav-link tx-gray-500" data-toggle="tab">
          <span data-toggle="tooltip" title="Wiki" data-placement="right"><Tag /></span>
        </a>
      </div>

    <div className="">
      <div className="aside-header">
        <a href="../../index.html" className="aside-logo">e<span>Company</span></a>
        <a href="" className="aside-menu-link">
          <Menu />
          <i data-feather="x"></i>
        </a>
      </div>
      <div className="aside-body">
        <div className="aside-loggedin">
          <div className="d-flex align-items-center justify-content-start">
            <a href="" className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle" alt=""></img></a>
            <div className="aside-alert-link">
              <a href="" className="new" data-toggle="tooltip" title="You have 2 unread messages"><MessageSquare /></a>
              <a href="" className="new" data-toggle="tooltip" title="You have 4 new notifications"><Bell /></a>
              <a href="" data-toggle="tooltip" title="Sign out"><i data-feather="log-out"></i></a>
            </div>
          </div>
          <div className="aside-loggedin-user">
            <a href="#loggedinMenu" className="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
              <h6 className="tx-semibold mg-b-0">Katherine Pechon</h6>
              <i data-feather="chevron-down"></i>
            </a>
            <p className="tx-color-03 tx-12 mg-b-0">Administrator</p>
          </div>
          <div className="collapse" id="loggedinMenu">
            <ul className="nav nav-aside mg-b-0">
              <li className="nav-item"><a href="" className="nav-link"><i data-feather="edit"></i> <span>Edit Profile</span></a></li>
              <li className="nav-item"><a href="" className="nav-link"><i data-feather="user"></i> <span>View Profile</span></a></li>
              <li className="nav-item"><a href="" className="nav-link"><i data-feather="settings"></i> <span>Account Settings</span></a></li>
              <li className="nav-item"><a href="" className="nav-link"><i data-feather="help-circle"></i> <span>Help Center</span></a></li>
              <li className="nav-item"><a href="" className="nav-link"><i data-feather="log-out"></i> <span>Sign Out</span></a></li>
            </ul>
          </div>
        </div>
        <ul className="nav nav-aside">
          <li className="nav-label">Dashboard</li>
          <li className="nav-item active"><a href="dashboard-one.html" className="nav-link"><i data-feather="shopping-bag"></i> <span>Status Monitoring</span></a></li>
          <li className="nav-item"><a href="dashboard-two.html" className="nav-link"><i data-feather="globe"></i> <span>Internal Analytics</span></a></li>
          <li className="nav-item"><a href="dashboard-three.html" className="nav-link"><i data-feather="pie-chart"></i> <span>Cryptocurrency </span></a></li>
          <li className="nav-item"><a href="dashboard-four.html" className="nav-link"><i data-feather="life-buoy"></i> <span>Helpdesk Management</span></a></li>
          <li className="nav-label mg-t-25">Web Apps</li>
          <li className="nav-item"><a href="app-calendar.html" className="nav-link"><i data-feather="calendar"></i> <span>Calendar</span></a></li>
          <li className="nav-item"><a href="app-chat.html" className="nav-link"><i data-feather="message-square"></i> <span>Chat</span></a></li>
          <li className="nav-item"><a href="app-contacts.html" className="nav-link"><i data-feather="users"></i> <span>Contacts</span></a></li>
          <li className="nav-item"><a href="app-file-manager.html" className="nav-link"><i data-feather="file-text"></i> <span>File Manager</span></a></li>
          <li className="nav-item"><a href="app-mail.html" className="nav-link"><i data-feather="mail"></i> <span>Mail</span></a></li>

          <li className="nav-label mg-t-25">Pages</li>
          <li className="nav-item with-sub">
            <a href="" className="nav-link"><i data-feather="user"></i> <span>User Pages</span></a>
            <ul>
              <li><a href="page-profile-view.html">View Profile</a></li>
              <li><a href="page-connections.html">Connections</a></li>
              <li><a href="page-groups.html">Groups</a></li>
              <li><a href="page-events.html">Events</a></li>
            </ul>
          </li>
          <li className="nav-item with-sub">
            <a href="" className="nav-link"><i data-feather="file"></i> <span>Other Pages</span></a>
            <ul>
              <li><a href="page-timeline.html">Timeline</a></li>
            </ul>
          </li>
          <li className="nav-label mg-t-25">User Interface</li>
          <li className="nav-item"><a href="../../components" className="nav-link"><i data-feather="layers"></i> <span>Components</span></a></li>
          <li className="nav-item"><a href="../../collections" className="nav-link"><i data-feather="box"></i> <span>Collections</span></a></li>
        </ul>
      </div>
    </div>
  </aside>
  )
}

export default SideBar