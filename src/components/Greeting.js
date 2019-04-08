import React from 'react'
import styled from 'styled-components'
import { ReactComponent } from '../images/GiantRobotLTD_Logo.svg'

const Greeting = () => (
  <Section>
    <Logo1 />
    <H1>Welcome</H1>
    <P>Please tell us a bit about yourself to get started.</P>
  </Section>
)

const Section = styled.section`
  background: #585858;
  min-width: 57%;
  height: 100vh;
  text-align: left;
  padding-left: 170px;
  color: #FFFFFF;
`
const Logo1 = styled(ReactComponent)`
  margin-top: 32px;
  width: 177px;
  height: 26px;
`
const H1 = styled.h1`
  margin-top: 40px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 3.2rem;
  margin-bottom: 8px;
`
const P = styled.p`
  font-family: 'Merriweather', 'serif';
  font-size: 1.4rem;
  color: #EAEAEA;
`

export default Greeting
