import Link from 'next/link'
import styles from './register-tier.module.css'

export default function RegisterTier() {
  return (

    <section className="sectionWhiteTier">

      <section className={styles.sectionRegisterImg}>
        <Link href="/register">
          <a><img src="/banner-register.png" alt="banner" /></a>
        </Link>
      </section>

      <section className={styles.sectionRegisterButtons}>
        <input type="submit" className={styles.buttonsSecondary} value="SABER MAIS" />
      </section>

    </section>

  )
}
