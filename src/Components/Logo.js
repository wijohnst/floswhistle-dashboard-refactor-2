import React from 'react'
import styled from 'styled-components'

import FloLogo from '../floswhistle.png'
const LogoWrapper = styled.div`
  display: flex;
  padding: 5px;
  text-align: center;
  border: solid thin black;
  flex-grow: 1;
  margin: 5px;
  justify-content: center;
  align-items: center;
`
export default function Logo() {
  return (
    <LogoWrapper>
      <img src={FloLogo} alt={'Flo Logo'} />
    </LogoWrapper>
  )
}
