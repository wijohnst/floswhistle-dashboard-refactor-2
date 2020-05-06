import React, { useState } from 'react'
import DashboardContext from './DashboardContext'

export default function DashboardContextProvider(props) {
  
  const [reportData, setReportData] = useState([
      {districtId: 'OH-03', rate: 25},
      {districtId: 'AL-01', rate: 45}, 
      {districtId: 'MA-01', rate: 100}
    ]
  )

  const [mapSelect, setMapSelect] = useState('Shortage'); //states = Shortage || Testing

  return (
    <DashboardContext.Provider value={[{data: reportData, update : setReportData},{data : mapSelect, update : setMapSelect}]}>
      {props.children}
    </DashboardContext.Provider>
  )
}
