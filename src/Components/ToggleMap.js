import React, { useContext } from 'react'
import DashboardContext from '../DashboardContext'

export default function ToggleMap() {

  const context = useContext(DashboardContext);
  const mapSelect = context[1].data;
  const setMapSelect = context[1].update;
  
  const handleClick = mapSelect =>{
    if(mapSelect === 'Shortage'){
      setMapSelect('Testing')
    }
    else if (mapSelect === 'Testing'){
      setMapSelect('Shortage')
    }
  }
  if(mapSelect === 'Shortage'){
    return(
      <button onClick={() => handleClick(mapSelect)}>See Testing Map</button>
    )
  }
  else if(mapSelect === "Testing"){
    return(
      <button onClick={() => handleClick(mapSelect)}>See Shortages Map</button>
    )
  }
}