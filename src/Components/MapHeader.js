import React, { useContext } from 'react'
import styled from 'styled-components'
import DashboardContext from '../DashboardContext'
import ToggleMap from './ToggleMap'

const MapHeaderWrapper = styled.div`
  border: solid thin black;
  padding: 5px;
  text-align: center;
  font-size: 2em;
  margin: 5px;
`
export default function MapHeader() {
  const context = useContext(DashboardContext);

  const mapSelect = context[1].data;

  if(mapSelect === 'Shortage'){
    return(
      <div>
        <h2>Shortages</h2>
        <p>Do caregivers have the supplies they need?</p>
        <ToggleMap />
      </div>
    )
  }else if(mapSelect==='Testing'){
    return(
      <div>
        <h2>Testing</h2>
        <p>Do caregivers have access to adequate testing?</p>
        <ToggleMap />
      </div>
    )
  }else{
    return(
      <div>
        <p>Map</p>
        <ToggleMap />
      </div>
    )
  }
  
}
