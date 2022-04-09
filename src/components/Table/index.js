import React from 'react'

const Table = () => {
   return(
   <div class="col-lg-4 col-xl-4 mg-t-10 pd-20">
      <div class="card">
        <div class="card-header d-md-flex align-items-center justify-content-between">
          <h6 class="mg-b-0">My Performance</h6>
          <ul class="list-inline d-flex mg-t-20 mg-sm-t-10 mg-md-t-0 mg-b-0">
            <li class="list-inline-item d-flex align-items-center mg-l-5">
              <span class="d-block wd-10 ht-10 bg-df-3 rounded mg-r-5"></span>
              <span class="tx-sans tx-uppercase tx-10 tx-medium tx-color-03">Points</span>
            </li>
          </ul>
        </div>
        <div class="card-body pd-20">
          <div class="t-20 l-20 wd-xl-100p z-index-10">
            <div class="row">
              <div class="col-sm-6">
                <h3 class="tx-normal tx-rubik tx-spacing--2 mg-b-5">50</h3>
                <h6 class="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-10">Hours</h6>
                <p class="mg-b-0 tx-12 tx-color-03">Aliquam id diam maecenas ultricies mauris. <a href="">View All</a></p>
              </div>
              <div class="col-sm-6 mg-t-20 mg-sm-t-0">
                <h3 class="tx-normal tx-rubik tx-spacing--2 mg-b-5">5,354</h3>
                <h6 class="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-10">Points</h6>
                <p class="mg-b-0 tx-12 tx-color-03">Et sollicitudin ac orci phasellus, Interdum. <a href="">View All</a></p>
              </div>
            </div>
            <div class="row mg-t-15">
              <div class="col-sm-6">
                <h3 class="tx-normal tx-rubik tx-spacing--2 mg-b-5">50</h3>
                <h6 class="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-10">Hours</h6>
                <p class="mg-b-0 tx-12 tx-color-03">Aliquam id diam maecenas ultricies mauris. <a href="">View All</a></p>
              </div>
              <div class="col-sm-6 mg-t-20 mg-sm-t-0">
                <h3 class="tx-normal tx-rubik tx-spacing--2 mg-b-5">5,354</h3>
                <h6 class="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-10">Points</h6>
                <p class="mg-b-0 tx-12 tx-color-03">Et sollicitudin ac orci phasellus, Interdum. <a href="">View All</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
}

export default Table