import React, { useState, useRef, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { CirclePicker } from 'react-color'
import { Zap, Edit } from 'react-feather'

import './styles.css'

const Hero = () => {

   // state management for hero
   const [backgroundColor, setBackgroundColor] = useState(null)
   const [show, setShow] = useState(false);
   const [hero, setHero] = useState({
      title: 'Hero', 
      subtitle: 'Howdy Subtitle', 
      content: 'this is conetent.',
   })

   useEffect(()=>{
      setBackgroundColor(window.localStorage.getItem("bgcolor"))

      
   }, [])

   useEffect(()=>{

      if(backgroundColor)      
         window.localStorage.setItem("bgcolor", backgroundColor);

   }, [backgroundColor])

   useEffect(()=>{

      if(hero){    
         window.localStorage.setItem("hero-title", hero.title);
         window.localStorage.setItem("hero-subtitle", hero.subtitle);
         window.localStorage.setItem("hero-content", hero.content);
      }
   }, [hero])

   // modal form refs
   const titleRef = useRef(null);
   const subRef = useRef(null);
   const contRef = useRef(null);

   // modal controls open / update (state)
   const handleUpdate = (color) => {

      if(!titleRef.current.value){
         setShow(false)
         return;
      }

      setHero({
         title: titleRef.current.value, 
         subtitle: subRef.current.value, 
         content: contRef.current.value,
      })
      setShow(false)
   };

   return(
      <div style={{backgroundColor : backgroundColor || '#0168fa'}} className="hero-image card card-body mg-b-25 pd-t-30">
         <div className="tx-white pd-b-20 d-flex justify-content-between">
            <Zap size={26}/>
            <p type='button' onClick={()=> setShow(true)} className="tx-white"><Edit className="tx-white-5" size={22}/></p>
         </div>
         <h6 className="tx-uppercase tx-20 tx-spacing-1 tx-white tx-bold mg-b-8">{hero.title}</h6>
         <div className="pd-b-20 d-lg-block align-items-end ">
            <h3 className="pd-t-10 pd-b-10 tx-normal tx-16 tx-rubik mg-b-0 mg-r-5 lh-1 tx-white-6">{hero.subtitle}</h3>
            <p className="tx-15 mg-b-0"><span className="tx-medium tx-white-8">{hero.content}</span></p>
         </div>
          <Modal show={show} onHide={handleUpdate} centered>
            <Modal.Header closeButton>
               <Modal.Title className="tx-bold">Edit Hero</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className="d-flex justify-content-between">
                  <div> Hero Title
                     <input ref={titleRef} name="title" type="text" className="form-control mg-t-5" placeholder="Input title here..."></input>
                  </div>
                  <div className=""> Sub Title
                     <input ref={subRef} name="subtitle" type="text" className="form-control mg-t-5" placeholder="Input sub title here..."></input>
                  </div>
               </div>
               <div className="mg-t-20">
                  <div> Hero Content
                     <textarea ref={contRef} name="content" className="form-control mg-t-10" rows="4" placeholder="Textarea"></textarea>
                  </div>
               </div>
               <div className="mg-t-20 flex-fill ">
                  <p className=''>Select Color</p>
                  <CirclePicker 
                     color={ backgroundColor || '#0168fa'}
                     onChangeComplete={ color => setBackgroundColor(color.hex) } 
                     className='flex-grow-1' 
                  />
               </div>
            </Modal.Body>
            <Modal.Footer>
               <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </Modal.Footer>
         </Modal>
      </div>
   )
}

export default Hero