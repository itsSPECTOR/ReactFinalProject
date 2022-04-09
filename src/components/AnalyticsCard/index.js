import React from 'react'

const AnalyticsCard = (props) => {
    return(
    <div className="col-sm-4 mg-t-10 mg-sm-t-0 col-lg-4">
        <div className="card card-body">
            <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Card Title</h6>
            <div className="d-flex d-lg-block d-xl-flex align-items-end">
            <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">1,234</h3>
            <p className="tx-11 tx-color-03 mg-b-0"><span className="tx-medium tx-danger">10.5% <i className="icon ion-md-arrow-down"></i></span></p>
            </div>
        </div>
    </div>
    )
}

export default AnalyticsCard