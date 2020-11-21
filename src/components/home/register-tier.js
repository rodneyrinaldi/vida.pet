import Link from 'next/link'
import styles from './register-tier.module.css'

import ModalTier from '../modal/index'

export default function RegisterTier() {
  function showModal() {
    var x = document.getElementById("modalTier");
    x.style.display = "block";
    console.log('clicado');
  }

  return (

    <section className="sectionWhiteTier">

      <ModalTier />

      <section className={styles.homeRegisterImg}>
        <Link href="/register">
          <a><img src="/banner-register.png" alt="banner" /></a>
        </Link>
      </section>

      <section className={styles.homeRegisterButtons}>
        <input onClick={showModal} type="submit" className={styles.buttonsSecondary} value="SAIBA MAIS" />
      </section>

    </section>

  )
}
