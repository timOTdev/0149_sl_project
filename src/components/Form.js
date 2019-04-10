import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent } from '../images/White_Arrow.svg'

const Form = () => {
  // HOOKS
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
  })

  // METHODS
  // updates hook from user input on form
  const handleUserChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  // sends an alert with user hook info and clears the user hook
  const handleUserSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, address1, address2 } = user
    alert(`
      First Name: ${firstName},
      Last Name: ${lastName},
      Address1: ${address1},
      Address2: ${address2 !== '' ? address2 : ''}
    `)
    setUser({
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
    })
  }

  // RETURN
  return (
    <Section>
      <Form1 onSubmit={handleUserSubmit}>
        <Label htmlFor="firstName" data-testid="label1">FIRST NAME</Label>
        <Input
          name="firstName"
          type="text"
          value={user.firstName}
          onChange={handleUserChange}
          required
          data-testid="input1"
        />

        <Label htmlFor="lastName" data-testid="label2">LAST NAME</Label>
        <Input
          name="lastName"
          type="text"
          value={user.lastName}
          onChange={handleUserChange}
          required
          data-testid="input2"
        />

        <Label htmlFor="address1" data-testid="label3">ADDRESS</Label>
        <Input
          name="address1"
          type="text"
          value={user.address1}
          onChange={handleUserChange}
          required
          data-testid="input3"
        />

        <Label htmlFor="address2" data-testid="label4" invalid>ADDRESS 2 (OPTIONAL)</Label>
        <Input2
          name="address2"
          type="text"
          value={user.address2}
          onChange={handleUserChange}
          placeholder=" "
        />
        <Button type="submit"
          data-testid="button">
          Next<Arrow />
        </Button>
      </Form1>
    </Section >
  )
}

const Section = styled.section`
  min-width: 32%;
  height: 100vh;
  background: ${props => props.theme.white};
  @media (max-width: 320px) {
    min-width: 100%;
    padding: 0;
    margin: 0;
  }
`
const Form1 = styled.form`
  display: flex;
  flex-direction: column;
  width: 376px;
  margin-top: 111px;
  margin-left: 24px;
  @media (max-width: 320px) {
    width: 100%;
    margin-top: 30px;
    margin-left: 15px;
  }
`
const Label = styled.label`
  margin-bottom: 8px;
  text-align: left;
  font-family: ${props => props.theme.merriweather};
  font-size: 1.2rem;
  color: ${props => props.theme.slate};
  `
const Input = styled.input`
  height: 48px;
  margin-bottom: 24px;
  padding-left: 16px;
  outline: none;
  border: 1px solid ${props => props.theme.silver};
  border-radius: 6px;
  font-family: ${props => props.theme.roboto};
  font-weight: 400;
  &:required {
    background: ${props => props.theme.shale};
    color: ${props => props.theme.slate};
  }
  &:active, &:valid {
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.skyblue};
  }
  /* RED HIGHLIGHT */
  &:invalid {
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.cherry};
  }
  @media (max-width: 320px) {
    width: 90%;
  }
`
const Input2 = styled.input`
  height: 48px;
  margin-bottom: 24px;
  padding-left: 16px;
  outline: none;
  border: 1px solid ${props => props.theme.silver};
  border-radius: 6px;
  font-family: ${props => props.theme.roboto};
  font-weight: 400;
  &:optional {
    color: ${props => props.theme.slate};
    background: ${props => props.theme.shale};
  }
  &:focus {
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.skyblue};
  }
  &:not(:placeholder-shown) {
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.skyblue};
  }
  @media (max-width: 320px) {
    width: 90%;
  }
`
const Button = styled.button`
  background: ${props => props.theme.tangerine};
  width: 106px;
  height: 48px;
  margin-top: 24px;
  font-family: ${props => props.theme.roboto};
  font-size: 1.6rem;
  color: ${props => props.theme.white};
  border: none;
  border-radius: 6px;
  @media (max-width: 320px) {
    width: 90%;
  }
`
const Arrow = styled(ReactComponent)`
  width: 10px;
  height: 10px;
  margin-left: 8px;
`

export default Form
