import { useRouter } from 'next/router';
import { useState } from 'react';

// import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'
import { MailSend } from '@styled-icons/boxicons-regular/MailSend'

import styles from './index.module.css'

const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgerr, setMsgerr] = useState("");

  function handleBack(e) {
    e.preventDefault();
    router.back()
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then((t) => t.json())

    console.log(res);
    const token = res.token

    if (!token) {
      const json = jwt.decode(token)
      setMsgerr(`Erro na Conexão`)
    }
    else {
      localStorage.setItem('@vida-pet/token', token);
      setMsgerr(`Conexão com sucesso`)
      router.back()
    }
  }

  return (
    <section className="sectionEmptyTier">
      <section className={styles.sectionPagesImg}>
        <img src="/banner-pages.png" alt="logo" />
        <h1>v i d a . p e t</h1>
      </section>
      <form method="post" action="#" className={styles.sectionLogin} >
        <input type="email" name="name" placeholder="E-mail" value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <input type="password" name="name" placeholder="Senha" value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        {msgerr}
        <div>
          <a onClick={() => router.push('/signin')}>
            <p>
              <UserCircle className={styles.iconLink} />
              {' '} novo usuário
            </p>
          </a>
          <a onClick={() => router.push('/reset')}>
            <p>
              <MailSend className={styles.iconLink} />
              {' '} esqueci a senha
            </p>
          </a>
        </div>
        <section className={styles.sectionLoginButtons}>
          <input type="submit" className={styles.buttonsPrimary} value="ENTRAR"
            onClick={handleSubmit} />
          <input type="submit" className={styles.buttonsPrimary} value="VOLTAR"
            onClick={handleBack} />
        </section>
      </form>
    </section>
  )
}
