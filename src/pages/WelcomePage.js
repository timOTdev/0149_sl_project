import React from 'react'
import { Greeting, Form } from '../components/'
import styled from 'styled-components'

const WelcomePage = () => (
  <Div>
    <Greeting />
    <Form />
  </Div>
)

const Div = styled.div`
  display: flex;
  margin: 0 auto;
  @media (max-width: 320px) {
    flex-direction: column;
  }
`

export default WelcomePage
