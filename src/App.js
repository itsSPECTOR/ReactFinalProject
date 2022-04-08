import './App.css';
import AnalyticsCard from './components/AnalyticsCard';
import SideBar from './components/SideBar';
import TopNav from './components/TopNav';

import './dashforge/assets/css/dashforge.dashboard.css';
import './dashforge/assets/css/dashforge.css'

function App() {
  return (
    <div className='body'>
      <SideBar />
      <div className='content ht-100v pd-0'>
        <TopNav />
        <div className='content-body'>
          <div className='container pd-x-0'>
            <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
              <div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Sales Monitoring</li>
                  </ol>
                </nav>
                <h4 className="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
              </div>
              <div className="d-none d-md-block">
                <button className="btn btn-sm pd-x-15 btn-white btn-uppercase"><i data-feather="mail" className="wd-10 mg-r-5"></i> Email</button>
                <button className="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><i data-feather="printer" className="wd-10 mg-r-5"></i> Print</button>
                <button className="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><i data-feather="file" className="wd-10 mg-r-5"></i> Generate Report</button>
              </div>
            </div>
            <div className='row'>
              <AnalyticsCard />
              <AnalyticsCard />
              <AnalyticsCard />          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
