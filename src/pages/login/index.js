import { useRouter } from 'next/router';
import { useState } from 'react';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'
import { MailSend } from '@styled-icons/boxicons-regular/MailSend'
import styles from './index.module.css'

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleBack(e) {
    e.preventDefault();
    router.back()
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
          <input type="submit" className={styles.buttonsPrimary} value="ENTRAR" />
          <input type="submit" className={styles.buttonsPrimary} value="VOLTAR" onClick={handleBack} />
        </section>
      </form>
    </section>
  )
}
