import React, { useState } from 'react'

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
    < section >
      <form onSubmit={handleUserSubmit}>
        <label htmlFor="firstName">FIRST NAME
          <input
            name="firstName"
            type="text"
            value={user.firstName}
            onChange={handleUserChange}
            required
          />
        </label>

        <label htmlFor="">LAST NAME
          <input
            name="lastName"
            type="text"
            value={user.lastName}
            onChange={handleUserChange}
            required
          />
        </label>

        <label htmlFor="">ADDRESS
          <input
            name="address1"
            type="text"
            value={user.address1}
            onChange={handleUserChange}
            required
          />
        </label>

        <label htmlFor="">ADDRESS 2 (OPTIONAL)
          <input
            name="address2"
            type="text"
            value={user.address2}
            onChange={handleUserChange}
          />
        </label>
        <button type="submit">Next ➔</button>
      </form>
    </section >
  )
}

export default Form
