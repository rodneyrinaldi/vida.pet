import { useState } from 'react';
import { useRouter } from 'next/router'
import styles from './index.module.css'

export default function Signin() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function handleBack(e) {
    e.preventDefault();
    router.back()
  }

  return (
    <section className="sectionEmptyTier">
      <section className={styles.sectionPagesImg}>
        <h1>v i d a . p e t</h1>
        <img src="/banner-pages.png" alt="logo" />
      </section>
      <form method="post" action="#" className={styles.sectionSignin} >
        <input type="text" name="name" placeholder="Nome" value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
        <input type="text" name="mobile" placeholder="Celular" value={mobile}
          onChange={(e) => { setMobile(e.target.value) }}
        />
        <input type="email" name="email" placeholder="E-mail" value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <input type="password" name="password" placeholder="Senha" value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <input type="password" name="password2" placeholder="Repita a senha" value={password2}
          onChange={(e) => { setPassword2(e.target.value) }}
        />
        <section className={styles.sectionSigninButtons}>
          <input type="submit" className={styles.buttonsPrimary} value="GRAVAR" />
          <input type="submit" className={styles.buttonsPrimary} value="VOLTAR" onClick={handleBack} />
        </section>
      </form>
    </section>
  )
}
