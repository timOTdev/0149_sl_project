import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import { Form } from '../components'

afterEach(cleanup)

describe('-- Form.js --', () => {
  it('renders', () => {
    const { container } = render(<Form />)
    expect(container).toMatchSnapshot()
  })

  describe('form element', () => {
    it('renders form element', () => {
      const { container } = render(<Form />)
      const formElement = document.querySelector('form')
      expect(container).toContainElement(formElement)
    })
  })

  describe('Input set 1', () => {
    it('renders label correctly', () => {
      const { getByTestId } = render(<Form />)
      expect(getByTestId('label1')).toHaveTextContent('FIRST NAME')
    })
    it('has attribute of required', () => {
      const { getByTestId } = render(<Form />)
      expect(getByTestId('input1')).toHaveAttribute('required')
    })
  })

  describe('Input set 2', () => {
    it('renders label correctly', () => {
      const { getByTestId } = render(<Form />)
      expect(getByTestId('label2')).toHaveTextContent('LAST NAME')
    })
    it('has attribute of required', () => {
      const { getByTestId } = render(<Form />)
      expect(getByTestId('input2')).toHaveAttribute('required')
    })
  })

  describe('Input set 3', () => {
    it('renders label correctly', () => {
      const { getByTestId } = render(<Form />)
      expect(getByTestId('label3')).toHaveTextContent('ADDRESS')
    })
    it('has attribute of required', () => {
      const { getByTestId } = render(<Form />)
      expect(getByTestId('input3')).toHaveAttribute('required')
    })
  })

  describe('Input set 4', () => {
    it('renders label correctly', () => {
      const { getByTestId } = render(<Form />)
      expect(getByTestId('label4')).toHaveTextContent('ADDRESS 2 (OPTIONAL)')
    })
  })

  describe('button element', () => {
    it('has type of submit', () => {
      render(<Form />)
      const buttonElement = document.querySelector('button')
      expect(buttonElement).toHaveAttribute('type', 'submit')
    })
  })
})
