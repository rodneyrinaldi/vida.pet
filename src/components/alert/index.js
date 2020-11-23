import { useRouter } from 'next/router';

import FooterTier from '../../components/footer/footer-tier'

import styles from './index.module.css'

export default function AlertComponent() {
  const router = useRouter();

  function handleBack(e) {
    e.preventDefault();
    router.back()
  }

  async function handleSubmit(e) {
    e.preventDefault();
    //router.back()
    alert(router.query.id)
  }

  return (
    <section className="sectionEmptyTier">

      <section className={styles.alertPagesImg}>
        <img src="/banner-pages.png" alt="logo" />
        <h1>v i d a . p e t</h1>
      </section>

      <form method="post" action="#" className={styles.alertAlert} >

        <section className={styles.alertPagesPhoto}>
          <h1>PROCURADO</h1>
          <div className={styles.alertPagesPhotoBox}>
            <img src="/oval-frame.png" alt="picture" />
            <img src="/banner-lost.jpg" alt="picture" />
          </div>
        </section>

        <section className={styles.alertAlertText}>
          <h1>nome cachorro</h1>
          <h2>11 1234-56789</h2>
        </section>

        <section className={styles.alertAlertButtons}>
          <input type="submit" className={styles.buttonsSecondary} value="AVISAR"
            onClick={handleSubmit} />
          <input type="submit" className={styles.buttonsPrimary} value="VOLTAR"
            onClick={handleBack} />
        </section>

      </form>

      <section className={styles.alertFooter}>
        <FooterTier />
      </section>

    </section >
  )
}