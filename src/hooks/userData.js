import React, { useEffect, useState } from 'react'

function userDataHook() {

   const [userData, setUserData] = useState()

   const userImport = 'https://randomuser.me/api'
         
      useEffect(() => {

         //this api wouldnt work with an async await function??
         const makeAPICall = () => {
            fetch(userImport)
            .then(res => res.json())
            .then(data => {
               setUserData(data)
            })
          }
         makeAPICall();
      }, []);

   return userData
}

export default userDataHook

