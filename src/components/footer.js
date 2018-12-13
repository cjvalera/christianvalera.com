import React from 'react'
import styled from 'styled-components'
import { Heart } from 'styled-icons/octicons/Heart'

const Tag = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`

const RedHeart = Heart.extend`
  color: red;
  margin: 0 5px;
`

const Footer = () => (
  <div>
    <Tag>
      Made with <RedHeart size="16" /> in {new Date().getFullYear()}
    </Tag>
  </div>
)

export default Footer
