import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"

import Restrict from '../restrict/index'

const InspectJWT = ({ children }) => {
  const [token, setToken] = useState('')
  const [auth, setAuth] = useState(false)


  useEffect(() => {

    async function fetchToken() {
      try {
        const tokenRead = localStorage.getItem('@vida-pet/token')
        if (tokenRead === null) {
          setAuth(false)
        } else {
          setToken(localStorage.getItem('@vida-pet/token'))
          const data = await fetch('/api/secret', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: token })
          })
          const res = await data.json()
          setAuth(res.logged)
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchToken()
  })

  return (
    <>
      { auth ? children : <Restrict />}
    </>
  )
}

InspectJWT.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InspectJWT
