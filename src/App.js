import React, { Component } from 'react'
import { WelcomePage } from './pages'
import styled, { createGlobalStyle } from 'styled-components'

class App extends Component {
  render() {
    return (
      <Div>
        <WelcomePage />
        <GlobalStyle />
      </Div>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0;
    font-size: 62.5%;
    text-align: center;
  }
  h1 {
    font-size: 3.2rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2rem;
  }
  p, a {
    font-size: 1.6rem;
  }
`
const Div = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  /* @media (max-width: 320px) {
    width: 320px;
  } */
`

export default App
