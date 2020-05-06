import React, { useRef, useContext } from 'react'
import styled from 'styled-components'

import DashboardContext from '../DashboardContext'

import { genColor, getDistrictInfo } from '../utils'
import DistrictsMap from '../districts_map.svg'
import {SvgLoader, SvgProxy} from 'react-svgmt'
import ReactToolTip from 'react-tooltip'


// const mapData = [{districtId: 'OH-03', rate: 25},{districtId: 'AL-01', rate: 45}, {districtId: 'MA-01', rate: 100}];

const MapWrapper = styled.div`
  border: solid thin black;
  overflow: scroll;
  margin: 5px;
`
export default function Map() {
  const context = useContext(DashboardContext);
  const mapData = context[0].data;
  const WrapperRef = useRef(null);

  return (
    <MapWrapper ref={WrapperRef}>
      <SvgLoader path={DistrictsMap}>
        {mapData.map((report) => (
            <React.Fragment key={`districtWrapper${report.districtId}`}>
              <ReactToolTip html={true} />
              <SvgProxy key={`#${report.districtId}`} selector={`#${report.districtId}`} fill={genColor(report.rate)} data-tip={getDistrictInfo (report.districtId, mapData)} />
            </React.Fragment>
        ))}
      </SvgLoader>
    </MapWrapper>
  )
}

  