import React from 'react';
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import { WelcomePage } from '../pages'

afterEach(cleanup)

describe('-- App.js --', () => {
  it('renders', () => {
    const { container } = render(<WelcomePage />)
    expect(container).toMatchSnapshot()
  })
})
