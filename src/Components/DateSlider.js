import React from 'react'
import styled from 'styled-components'

const DateSliderWrapper = styled.div`
  border: solid thin black;
  padding: 5px;
  margin: 5px;
  text-align: center;
`
export default function DateSlider() {
  return (
    <DateSliderWrapper>
      <input type="range" min="1" max="100" value="50" class="slider"/>
    </DateSliderWrapper>
  )
}
