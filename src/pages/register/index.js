import { useRouter } from 'next/router';

import styles from './index.module.css'

import InspectJWT from '../../components/inspect'
import QRCode from '../../components/qrcode/index'

export default function Register() {
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
    <InspectJWT>
      <section className="sectionEmptyTier">
        <section className={styles.sectionPagesImg}>
          <img src="/banner-pages.png" alt="logo" />
          <h1>v i d a . p e t</h1>
        </section>
        <form method="post" action="#" className={styles.sectionRegister} >

          <QRCode />

          <br /><br /><br /><br /><br /><br />

          <section className={styles.sectionRegisterButtons}>
            <input type="submit" className={styles.buttonsPrimary} value="ENTRAR"
              onClick={handleSubmit} />
            <input type="submit" className={styles.buttonsPrimary} value="VOLTAR"
              onClick={handleBack} />
          </section>
        </form>
      </section>
    </InspectJWT>
  )
}