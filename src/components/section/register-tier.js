import styles from './Register-tier.module.css'

export default function RegisterTier() {
  return (

    <section className="sectionWhiteTier">

      <section className={styles.sectionRegisterImg}>
        <img src="/banner-register.png" alt="banner" />
      </section>

      <section className={styles.sectionRegisterButtons}>
        <input type="submit" className={styles.buttonsSecondary} value="SABER MAIS" />
      </section>

    </section>

  )
}
