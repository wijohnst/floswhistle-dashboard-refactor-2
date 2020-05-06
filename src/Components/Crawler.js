import React from 'react'
import styled from 'styled-components'

const TextWrapper = styled.div`
  padding: 5px;
  border: solid thin black;
  margin: 5px;
  flex-shrink: 1;
`
export default function Crawler() {
  return (
    <TextWrapper>
      <p>Reports from direct patient caregivers are a vital component to understanding frontline healthcare conditions in this pandemic. This project collects collects anonymous pandemic-related reports from those caregivers, specifically regarding resource shortages and testing status.</p> 

        <p>Maps show cumulative data as of today. 
        Use slider below maps to change see results from previous dates.
        Click on map to display data for Congressional district</p> 

        <p>OTHER INSTRUCTION FOR NAVIGATING TO SECOND MAP  Using buttons in this example.</p>
    </TextWrapper>
  )
}
