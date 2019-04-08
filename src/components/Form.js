import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../images/White_Arrow.svg'

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
        <Label htmlFor="firstName">FIRST NAME</Label>
        <Input
          name="firstName"
          type="text"
          value={user.firstName}
          onChange={handleUserChange}
          required
        />

        <Label htmlFor="lastName">LAST NAME</Label>
        <Input
          name="lastName"
          type="text"
          value={user.lastName}
          onChange={handleUserChange}
          required
        />

        <Label htmlFor="address1">ADDRESS</Label>
        <Input
          name="address1"
          type="text"
          value={user.address1}
          onChange={handleUserChange}
          required
        />

        <Label htmlFor="address2">ADDRESS 2 (OPTIONAL)</Label>
        <Input
          name="address2"
          type="text"
          value={user.address2}
          onChange={handleUserChange}
        />
        <Button type="submit">
          Next &nbsp; <Arrow />
        </Button>
      </Form1>
    </Section >
  )
}

const Section = styled.section`
  min-width: 32%;
  height: 100vh;
  background: #FFF;
`
const Form1 = styled.form`
  margin-top: 111px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  width: 376px;
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
`

export default Form
