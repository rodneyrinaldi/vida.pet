import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './index.module.css'

export default function NewPass() {
  const router = useRouter();
  const [newpw, setNewpw] = useState("");
  const [newpw2, setNewpw2] = useState("");

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
      <form method="post" action="#" className={styles.sectionNewPass} >
        <input type="newpw" name="newpw" placeholder="Nova senha" value={newpw}
          onChange={(e) => { setNewpw(e.target.value) }}
        />
        <input type="newpw" name="newpw2" placeholder="Digite novamente" value={newpw2}
          onChange={(e) => { setNewpw2(e.target.value) }}
        />
        <section className={styles.sectionNewPassButtons}>
          <input type="submit" className={styles.buttonsPrimary} value="ENVIAR" />
          <input type="submit" className={styles.buttonsPrimary} value="VOLTAR" onClick={handleBack} />
        </section>
      </form>
    </section>
  )
}