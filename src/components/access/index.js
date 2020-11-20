import React, { useState, useEffect } from 'react'

import { LogIn } from '@styled-icons/boxicons-regular/LogIn'
import { LogOut } from '@styled-icons/boxicons-regular/LogOut'

import styles from './index.module.css'

export default function Access() {
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
          const { logged } = await data.json()
          setAuth(logged);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchToken()
  })

  function handleLogout() {
    localStorage.removeItem('@vida-pet/token');
    window.location.reload();
    setAuth(false)
  }

  return (
    <>
      {
        auth
          ? <a href="/" onClick={handleLogout}><LogOut className={styles.sectionMenu} /></a>
          : <a href="/login"><LogIn className={styles.sectionMenu} /> </a>
      }
    </>
  )
}


