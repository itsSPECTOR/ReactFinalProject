import React from "react";
import { BarChart, DollarSign, Award} from "react-feather";

const Stats = () => {
   return(
      <div className="col-lg-12 col-xl-8 mg-t-30">
         <div className="card mg-b-10 pd-b-20">
            <div className="card-header pd-t-15 d-sm-flex align-items-start justify-content-between bd-b-0 pd-b-0">
            <div>
               <h6 className="mg-b-5">Your Most Recent Earnings</h6>
               <p className="tx-13 tx-color-03 mg-b-0">Your sales and hourly earnings over the last 30 days</p>
            </div>
            <div className="d-flex mg-t-20 mg-sm-t-0">
               <div className="btn-group flex-fill">
                  <button className="btn btn-white btn-xs active">Range</button>
                  <button className="btn btn-white btn-xs">Period</button>
               </div>
            </div>
            </div>
            <div className="card-body pd-y-30">
            <div className="d-sm-flex">
               <div className="media">
                  <div className="wd-40 wd-md-50 ht-40 ht-md-50 bg-primary tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-6">
                  <BarChart />
                  </div>
                  <div className="media-body">
                  <h6 className="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold tx-nowrap mg-b-5 mg-md-b-8">Total Hours</h6>
                  <h4 className="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">432</h4>
                  </div>
               </div>
               <div className="media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40">
                  <div className="wd-40 wd-md-50 ht-40 ht-md-50 bg-secondary tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-5">
                  <DollarSign />
                  </div>
                  <div className="media-body">
                  <h6 className="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8">Total Earnings</h6>
                  <h4 className="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">$34,769<small className="tx-10">.10</small></h4>
                  </div>
               </div>
               <div className="media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40">
                  <div className="wd-40 wd-md-50 ht-40 ht-md-50 bg-success tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-4">
                  <Award />
                  </div>
                  <div className="media-body">
                  <h6 className="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8">Points Earned</h6>
                  <h4 className="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">5,265<small className="tx-10">.00</small></h4>
                  </div>
               </div>
            </div>
            </div>
            <div className="table-responsive">
            <table className="table table-dashboard mg-b-0">
               <thead>
                  <tr>
                  <th>Date</th>
                  <th className="text-right">Sales Count</th>
                  <th className="text-right">Gross Earnings</th>
                  <th className="text-right">Tax Withheld</th>
                  <th className="text-right">Net Earnings</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                  <td className="tx-color-03 tx-normal">03/05/2018</td>
                  <td className="tx-medium text-right">1,050</td>
                  <td className="text-right tx-teal">+ $32,580.00</td>
                  <td className="text-right tx-pink">- $3,023.10</td>
                  <td className="tx-medium text-right">$28,670.90 <span className="mg-l-5 tx-10 tx-normal tx-success"><i className="icon ion-md-arrow-up"></i> 4.5%</span></td>
                  </tr>
                  <tr>
                  <td className="tx-color-03 tx-normal">03/04/2018</td>
                  <td className="tx-medium text-right">980</td>
                  <td className="text-right tx-teal">+ $30,065.10</td>
                  <td className="text-right tx-pink">- $2,780.00</td>
                  <td className="tx-medium text-right">$26,930.40  <span className="mg-l-5 tx-10 tx-normal tx-danger"><i className="icon ion-md-arrow-down"></i> 0.8%</span></td>
                  </tr>
                  <tr>
                  <td className="tx-color-03 tx-normal">03/04/2018</td>
                  <td className="tx-medium text-right">980</td>
                  <td className="text-right tx-teal">+ $30,065.10</td>
                  <td className="text-right tx-pink">- $2,780.00</td>
                  <td className="tx-medium text-right">$26,930.40  <span className="mg-l-5 tx-10 tx-normal tx-danger"><i className="icon ion-md-arrow-down"></i> 0.8%</span></td>
                  </tr>
               </tbody>
            </table>
            </div>
         </div>
      </div>
   )
}

export default Stats