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
  @media (max-width: 320px) {
    width: 100%;
    padding: 0;
    margin: 0;
    padding-left: 16px;
    height: auto;
    padding-bottom: 22px;
  }
`
const Logo1 = styled(ReactComponent)`
  margin-top: 32px;
  width: 177px;
  height: 26px;
  @media (max-width: 320px) {
    margin:
  }
`
const H1 = styled.h1`
  margin-top: 40px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 3.2rem;
  margin-bottom: 8px;
  @media (max-width: 320px) {
    margin-top: 32px;
    font-size: 2.4rem;
  }
`
const P = styled.p`
  font-family: 'Merriweather', 'serif';
  font-size: 1.4rem;
  color: #EAEAEA;
  @media (max-width: 320px) {
    font-size: 1.4rem;
    width: 85%;
    line-height: 1.5;
  }
`

export default Greeting
