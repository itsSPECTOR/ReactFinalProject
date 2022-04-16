import React from 'react'
import TopPageInfo from '../../components/TopPageInfo'
import TopNav from '../../components/TopNav'
import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './styles.css'

const Analytics = () => {

   document.title = 'Analytics'

   const dataC1 = [
      {
         name: 'Jan',
         Revenue: 4000,
         Profit: 2400,
         amt: 2400,
      },
      {
         name: 'Feb',
         Revenue: 3000,
         Profit: 1398,
         amt: 2210,
      },
      {
         name: 'March',
         Revenue: 2000,
         Profit: 9800,
         amt: 2290,
      },
      {
         name: 'April',
         Revenue: 2780,
         Profit: 3908,
         amt: 2000,
      },
      {
         name: 'May',
         Revenue: 1890,
         Profit: 4800,
         amt: 2181,
      },
      {
         name: 'June',
         Revenue: 2390,
         Profit: 3800,
         amt: 2500,
      },
      {
         name: 'July',
         Revenue: 3490,
         Profit: 4300,
         amt: 2100,
      },
   ];

   const dataC2 = [
      {
         name: 'Q1',
         uv: 4000,
         pv: 2400,
         amt: 2400,
      },
      {
         name: 'Q2',
         uv: 3000,
         pv: 1398,
         amt: 2210,
      },
      {
         name: 'Q3',
         uv: 2000,
         pv: 9800,
         amt: 2290,
      },
   ];

   const renderLineChart = (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={500}
          data={dataC1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Profit" stroke="#0168fa" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Revenue" stroke="#dc3545" />
        </LineChart>
      </ResponsiveContainer>
    )

    const renderBarChart = (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={200}
          height={300}
          data={dataC2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    )




   return(
      <div className='body'>
         <div className='content ht-100v pd-0 pd-l-40 mg-l-200'>
            <TopNav /> 
            <div className='content-body'>
               <div className='container pd-x-0'>
                  <TopPageInfo Title={'Analytics Overview'} Crumb={'Dashboard'} Slug={'Anyltics'}/>
                  <div className='row d-flex mg-l-0 mg-r-0 mg-b-10'> 
                     <div className='bg-white flex-grow-1 pd-l-0 mg-0  analytics pd-b-70 pd-t-20'>
                        <h5 className='mg-l-30 tx-semibold tx-14'>Overall Sales</h5>
                        <p className='pd-0 mg-l-30 tx-12 tx-gray-400'>Displaying historical sales over the past 30 days.</p>
                        {renderLineChart}
                     </div>
                     <div className='flex-fill bg-white pd-l-0 mg-0 pd-b-20 pd-t-50'>
                        {renderBarChart}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Analytics