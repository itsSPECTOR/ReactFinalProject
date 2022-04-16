import React from 'react'
import { Plus } from 'react-feather'
import DogPost from './DogPost'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import './styles.css'

const DogDay = ({ addPup, pups }) => {

  console.log('pups',pups)
  const pupList = pups.map((pup, index) => {
    return (
      <DogPost 
        key={index} 
        name={pups[index].name}
        text={pups[index].text}
        img={pups[index].img}
      />
    );
  })

  return(
    <>
      <div className="col-lg-4 col-xl-4 mg-t-0 pd-t-10">
          <div className="card dog-pic bg-primary">
            <div className="card-header d-md-flex align-items-center justify-content-between">
              <h4 className="mg-b-0 tx-bold tx-white">Woof Wednesday</h4>
            </div>
            <div className="card-body pd-20 mg-b-50">
              <div className=''>
                <h6 className="tx-semibold tx-white">Dog Day!</h6>
                <p className="tx-white">Gain 10 Points for posting a picture of you and your dog today.</p>
              </div>
            </div>
            <div className="card-footer pd-20">
              <button className='btn btn-sm btn-dark mg-r-10'><Plus size={16}/> Hop In</button>
              <OverlayTrigger
                trigger="click"
                key={'top'}
                overlay={
                  <Popover id={`popover-positioned-top`}>
                    <Popover.Header as="h3">{`Pup Event`}</Popover.Header>
                    <Popover.Body>
                      <div className='tx-normal'>
                        <strong>Howd'y!</strong> This event is for fellow pet lovers, post a pic of your pup! Join in!
                      </div>
                    </Popover.Body>
                  </Popover>
                }
              >
              <button className='btn btn-sm btn-outline-light tx-white'>Learn More</button>
              </OverlayTrigger>
            </div>
          </div>
      </div>
      {pupList}
    </>
   )
}

export default DogDay