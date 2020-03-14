import React from 'react';
import styled from 'styled-components'

const WhitePiece = () => (
  <SCsvg xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="16" stroke="black" fill="white" />
  </SCsvg>
)

export default WhitePiece

const SCsvg = styled.svg`
  width: 40px;
  height: 40px;
`
