import { useState, FormEvent } from 'react';
import styles from './index.module.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

  }

  return (
    <section className="sectionWhiteTier">
      <section className={styles.sectionPagesImg}>
        <img src="/banner-pages.png" alt="logo" />
      </section>
      <form method="post" action="#" className={styles.sectionLogin} >
        <input type="email" name="name" placeholder="E-mail" value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <input type="password" name="name" placeholder="Senha" value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <section className={styles.sectionLoginButtons}>
          <input type="submit" className={styles.buttonsPrimary} value="ENTRAR" />
          <input type="submit" className={styles.buttonsPrimary} value="VOLTAR" />
        </section>
      </form>
    </section>
  )
}
