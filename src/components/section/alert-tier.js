import Link from 'next/link'
import styles from './alert-tier.module.css'

export default function AlertTier() {
  return (

    <section className="sectionWhiteTier">

      <section className={styles.sectionAlertImg}>
        <Link href="/alert">
          <a><img src="/banner-alert.png" alt="banner" /></a>
        </Link>
      </section>

      <section className={styles.sectionAlertButtons}>
        <input type="submit" className={styles.buttonsSecondary} value="SAIBA MAIS" />
      </section>

    </section>

  )
}
