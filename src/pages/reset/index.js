import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './index.module.css'

export default function Reset() {
  const router = useRouter();
  const [email, setEmail] = useState("");

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
      <form method="post" action="#" className={styles.sectionReset} >
        <input type="email" name="name" placeholder="E-mail" value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <section className={styles.sectionResetButtons}>
          <input type="submit" className={styles.buttonsPrimary} value="ENVIAR" />
          <input type="submit" className={styles.buttonsPrimary} value="VOLTAR" onClick={handleBack} />
        </section>
      </form>
    </section>
  )
}
