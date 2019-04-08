import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../images/GiantRobotLTD_Logo.svg'

const Greeting = () => (
  <Section>
    <Logo />
    <H1>Welcome</H1>
    <P>Please tell us a bit about yourself to get started.</P>
  </Section>
)

const Section = styled.section`
  background: #585858;
  min-width: 63%;
  height: 100vh;
`
const H1 = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
`
const P = styled.p`
  font-family: 'Merriweather';
  font-size: 14px;
`

export default Greeting
