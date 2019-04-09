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
  const handleUserChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

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

        <Label htmlFor="address2" data-testid="label4">ADDRESS 2 (OPTIONAL)</Label>
        <Input
          name="address2"
          type="text"
          value={user.address2}
          onChange={handleUserChange}
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
  background: #FFF;
  @media (max-width: 320px) {
    min-width: 100%;
    padding: 0;
    margin: 0;
  }
`
const Form1 = styled.form`
  margin-top: 111px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  width: 376px;
  @media (max-width: 320px) {
    width: 100%;
    margin-top: 30px;
    margin-left: 15px;
  }
`
const Label = styled.label`
  color: #666666;
  font-family: 'Merriweather', 'serif';
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 8px;
`
const Input = styled.input`
  height: 48px;
  border-radius: 6px;
  margin-bottom: 24px;
  padding-left: 16px;
  outline: none;
  background: #F7F7F7;
  border: 1px solid #EAEAEA;
  font-family: 'Roboto', 'sans-serif';
  font-size: 1.4rem;
  font-weight: 400;
  color: #666666;
  &:focus {
    background: #FFFFFF;
    border: 1px solid #00ADEE;
  }
  &:invalid {
    background: #FFFFFF;
    border: 1px solid #E70000;
  }
  @media (max-width: 320px) {
    width: 90%;
  }
`
const Button = styled.button`
  background: #FFAB44;
  color: white;
  border-radius: 6px;
  height: 48px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 1.6rem;
  width: 106px;
  margin-top: 24px;
  border: none;
  @media (max-width: 320px) {
    width: 90%;
  }
`
const Arrow = styled(ReactComponent)`
  margin-left: 8px;
  width: 10px;
  height: 10px;
`

export default Form
