import styles from "./index.module.css"

export default function SectionRegister() {
  return (
    <section className={styles.bannerRegister}>

      <section className={styles.sectionRegisterImg}>
        <img src="/banner-register.png" alt="banner" />
      </section>

      <section className={styles.sectionRegisterButtons}>
        <input type="submit" className={styles.buttonsSecondary} value="SABER MAIS" />
      </section>

    </section>
  )
}