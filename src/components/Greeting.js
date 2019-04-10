import React from 'react'
import styled from 'styled-components'
import { ReactComponent } from '../images/GiantRobotLTD_Logo.svg'

const Greeting = () => (
  <Section>
    <Logo1 data-testid="svg-element" />
    <H1 data-testid="h1tag">Welcome</H1>
    <P data-testid="ptag">Please tell us a bit about yourself to get started.</P>
  </Section>
)

const Section = styled.section`
  background: ${props => props.theme.metallic}
  min-width: 57%;
  height: 100vh;
  padding-left: 170px;
  text-align: left;
  color: ${props => props.theme.white};
  @media (max-width: 320px) {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    padding-left: 16px;
    padding-bottom: 22px;
  }
`
const Logo1 = styled(ReactComponent)`
  width: 177px;
  height: 26px;
  margin-top: 32px;
  margin-bottom: 15px;
  @media (max-width: 320px) {
    margin-bottom: 32px;
  }
`
const H1 = styled.h1`
  margin-bottom: 10px;
  font-family: ${props => props.theme.roboto};
  color: ${props => props.theme.white};
  @media (max-width: 320px) {
    margin-bottom: 0;
    margin-top: 2px;
    font-size: 2.4rem;
  }
`
const P = styled.p`
  font-family: ${props => props.theme.merriweather};
  color: ${props => props.theme.silver};
  @media (max-width: 320px) {
    width: 85%;
    line-height: 2;
    margin-top: 4px;
  }
`

export default Greeting
