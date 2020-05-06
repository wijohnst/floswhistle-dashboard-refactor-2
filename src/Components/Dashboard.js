import React from 'react'
import styled from 'styled-components'

import DashboardContextProvider from '../DashboardContetxProvider'

import Logo from './Logo'
import Crawler from './Crawler'
import MapHeader from './MapHeader'
import NationalStats from './NationalStats'
import Map from './Map'
import DistrictStats from './DistrictStats'
import DateSlider from './DateSlider'

const DashboardWrapper = styled.div`
  /* background-color: lightgreen; */
  min-height: 100%;
  padding: 5px;
`
const LogoCrawlerWrapper = styled.div`
  /* background-color: lightpink; */
  display: flex;
  flex-direction: row;


  @media (max-width: 400px) {
    flex-direction: column;
  }
` 
const ReportsWrapper = styled.div`
  /* background-color: lightyellow; */
  display: flex;
  flex-direction: row;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`
const SliderWrapper = styled.div`
  /* background-color: lightpink; */
`

export default function Dashboard() {
  return (
    <DashboardContextProvider>
      <DashboardWrapper>
        <LogoCrawlerWrapper>
          <Logo />
          <Crawler />
        </LogoCrawlerWrapper>
        <MapHeader/>
        <ReportsWrapper>
          <NationalStats />
          <Map />
          <DistrictStats />
        </ReportsWrapper>
        <SliderWrapper>
          <DateSlider />
        </SliderWrapper>
      </DashboardWrapper>
    </DashboardContextProvider>
  )
}
