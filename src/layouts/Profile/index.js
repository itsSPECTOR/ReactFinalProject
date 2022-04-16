import React, { useRef, useEffect, useState } from 'react';
import TopPageInfo from '../../components/TopPageInfo'
import TopNav from '../../components/TopNav'
import mapboxgl from 'mapbox-gl'
import { Phone, Map, Code, CornerRightUp } from 'react-feather';
import './styles.css'

const Profile = ({ userData }) => {

   console.log('USERDATA - PROFILE -',userData)
   mapboxgl.accessToken = 'pk.eyJ1IjoiaW1zcGVjdG9yIiwiYSI6ImNsMXk2M3I2NjA5b2gzanFyZ21yNGRtOW0ifQ.aSMewmJI-4rNx4-xn03S8g';

   document.title = 'My Profile'

   const mapContainer = useRef(null);
   const map = useRef(null);
   const [lng, setLng] = useState(userData.location.coordinates.longitude);
   const [lat, setLat] = useState(userData.location.coordinates.latitude);
   const [zoom, setZoom] = useState(9);

   useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
      });
   }, []);

   return(
      <div className='body'>
         <div className='content ht-100v pd-0 pd-l-40 mg-l-200'>
            <TopNav /> 
            <div className='content-body'>
               <div className='container pd-x-0'>
                  <TopPageInfo Title={'My Profile'} Crumb={'Dashboard'} Slug={'Profile'}/>
                  <div className='row pd-0 mg-0'> 
                     <div className='col-lg-4 mg-0 pd-0'>
                        <div className='avatar-large'>
                           <img src={userData.picture.large}></img>
                        </div>
                        <span class="badge badge-success mg-t-20 mg-b-5">Online</span>
                        <h5 className='tx-semibold'>{userData.name.first + ' ' + userData.name.last} 
                           <span className='tx-normal tx-14 tx-primary mg-l-5 mg-b-15'>@{userData.login.username}</span>
                        </h5>
                        <p className='mg-t-0 tx-14 tx-gray-400'>{userData.email}</p>
                        <h6 className='tx-semibold tx-gray-800 tx-14 mg-t-30'>My Info</h6>
                        <p className='mg-b-5'><Map size={14} className='mg-r-5'/> Location: {userData.location.country}</p>
                        <p className='mg-b-5'><Phone size={14} className='mg-r-5'/> Phone: {userData.cell}</p>
                        <p className='mg-b-5'><Code size={14} className='mg-r-5'/> Gender: {userData.gender}</p>
                        <h6 className='tx-semibold tx-gray-800 tx-14 mg-t-30'>Profile</h6>
                        <p className='mg-b-5'><CornerRightUp size={14} className='mg-r-5'/> Joined: {userData.registered.date}</p>
                     </div>
                     <div className='col-lg-8 bg-gray-200 pd-0 rounded-20'>
                        <div ref={mapContainer} className="map-container rounded-20" />
                     </div>                 
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Profile