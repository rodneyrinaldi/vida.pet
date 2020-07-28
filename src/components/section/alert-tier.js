import styles from './alert-tier.module.css'

export default function AlertTier() {
  return (

    <section className="sectionWhiteTier">

      <section className={styles.sectionAlertImg}>
        <img src="/banner-alert.png" alt="banner" />
      </section>

      <section className={styles.sectionAlertButtons}>
        <input type="submit" className={styles.buttonsSecondary} value="SABER MAIS" />
      </section>

    </section>

  )
}
