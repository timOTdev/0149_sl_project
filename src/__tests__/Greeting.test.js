import React from 'react';
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import { Greeting } from '../components'

afterEach(cleanup)

describe('-- Greeting.js --', () => {
  it('renders', () => {
    const { container } = render(<Greeting />)
    expect(container).toMatchSnapshot()
  })

  it('has svg in document', () => {
    render(<Greeting />)
    const svgElement = document.querySelector('[data-testid="svg-element"]')
    expect(svgElement).toBeInTheDocument()
  })

  it('has h1 with specified text', () => {
    const { getByTestId } = render(<Greeting />)
    expect(getByTestId('h1tag')).toHaveTextContent('Welcome')
  })

  it('has p with specified text', () => {
    const { getByTestId } = render(<Greeting />)
    expect(getByTestId('ptag')).toHaveTextContent('Please tell us a bit about yourself to get started.')
  })
})
