import styles from './Contact-tier.module.css'

export default function ContactTier() {
  return (

    <section className="sectionWhiteTier">

      <section className={styles.sectionContactImg}>
        <img src="/banner-contact.png" alt="banner" />
      </section>

      <section className={styles.sectionContactButtons}>
        <input type="submit" className={styles.buttonsSecondary} value="SABER MAIS" />
      </section>

    </section>

  )
}
