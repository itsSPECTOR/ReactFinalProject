import React from 'react'

const AnalyticsCard = () => {
    return(
    <div className="col-sm-4 col-lg-4 mg-t-10 mg-sm-t-0">
        <div className="card card-body">
            <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Unique Purchases</h6>
            <div className="d-flex d-lg-block d-xl-flex align-items-end">
            <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">3,137</h3>
            <p className="tx-11 tx-color-03 mg-b-0"><span className="tx-medium tx-danger">0.7% <i className="icon ion-md-arrow-down"></i></span></p>
            </div>
            <div className="chart-three">
                <div id="flotChart4" className="flot-chart ht-30"></div>
            </div>
        </div>
    </div>
    )
}

export default AnalyticsCard