import Link from 'next/link';
import { useState, FormEvent } from 'react';
import { File } from '@styled-icons/boxicons-regular/File'
import styles from './index.module.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

  }

  return (
    <section className="sectionEmptyTier">
      <section className={styles.sectionPagesImg}>
        <h1>vida.pet</h1>
        <img src="/banner-pages.png" alt="logo" />
      </section>
      <form method="post" action="#" className={styles.sectionLogin} >
        <input type="email" name="name" placeholder="E-mail" value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <input type="password" name="name" placeholder="Senha" value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <Link href="/signin">
          <a>
            <p>
              <File className={styles.iconLink} />
              {' '} cadastrar novo usuário
            </p>
          </a>
        </Link>
        <section className={styles.sectionLoginButtons}>
          <input type="submit" className={styles.buttonsPrimary} value="ENTRAR" />
          <input type="submit" className={styles.buttonsPrimary} value="VOLTAR" />
        </section>
      </form>
    </section>
  )
}
