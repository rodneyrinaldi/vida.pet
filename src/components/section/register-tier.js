import Link from 'next/link'
import styles from './register-tier.module.css'

export default function RegisterTier() {
  function showModal() {
    var x = document.getElementById("modalTier");
    x.style.display = "block";
  }

  return (

    <section className="sectionWhiteTier">

      <section className={styles.sectionRegisterImg}>
        <Link href="/register">
          <a><img src="/banner-register.png" alt="banner" /></a>
        </Link>
      </section>

      <section className={styles.sectionRegisterButtons}>
        <input onClick={showModal} type="submit" className={styles.buttonsSecondary} value="SAIBA MAIS" />
      </section>

    </section>

  )
}
