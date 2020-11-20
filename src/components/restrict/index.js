import { useRouter } from 'next/router';

import styles from './index.module.css'


export default function Restrict() {
  const router = useRouter();

  function handleBack(e) {
    e.preventDefault();
    router.back()
  }

  return (
    <section className="sectionEmptyTier">
      <section className={styles.sectionPagesImg}>
        <img src="/banner-pages.png" alt="logo" />
        <h1>v i d a . p e t</h1>
      </section>
      <form method="post" action="#" className={styles.sectionRestrict} >

        <h1>Área restrita</h1>

        <br />

        <section className={styles.sectionRestrictButtons}>
          <input type="submit" className={styles.buttonsPrimary} value="VOLTAR"
            onClick={handleBack} />
        </section>
      </form>
    </section>
  )
}