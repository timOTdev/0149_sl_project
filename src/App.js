import React, { Component } from 'react'
import { WelcomePage } from './pages'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from './theme'
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Div>
          <WelcomePage />
          <GlobalStyle />
        </Div>
      </ThemeProvider>
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
  p, a, input {
    font-size: 1.4rem;
  }
`
const Div = styled.div`
  margin: 0 auto;
  max-width: 1240px;
`

export default App
