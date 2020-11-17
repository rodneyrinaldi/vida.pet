import { useRouter } from 'next/router';

import styles from './index.module.css'

export default function Alert() {
  const router = useRouter();

  function handleBack(e) {
    e.preventDefault();
    router.back()
  }

  async function handleSubmit(e) {
    e.preventDefault();
    router.back()
  }

  return (
    <section className="sectionEmptyTier">
      <section className={styles.sectionPagesImg}>
        <img src="/banner-pages.png" alt="logo" />
        <h1>v i d a . p e t</h1>
      </section>
      <form method="post" action="#" className={styles.sectionAlert} >


        <section className={styles.sectionAlertButtons}>
          <input type="submit" className={styles.buttonsPrimary} value="ENTRAR"
            onClick={handleSubmit} />
          <input type="submit" className={styles.buttonsPrimary} value="VOLTAR"
            onClick={handleBack} />
        </section>
      </form>
    </section>
  )
}