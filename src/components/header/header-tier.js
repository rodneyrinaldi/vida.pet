import styles from './header-tier.module.css'

export default function HeaderTier() {

  return (

    <section className="sectionGreenTier">

      <header className={styles.sectionHeader}>
        <div>
          <a href="/"><img src="/logo-img.png" alt="logo" className={styles.sectionHeaderLogoImg} /></a>
        </div>
        <nav>
          <li><a href="/">ACESSO</a></li>
          <li><a href="/">CONTATO</a></li>
          <li><a href="/"><img src="/menu.png" alt="logo" /></a></li>
        </nav>
      </header>

      <section className={styles.sectionHeaderImg}>
        <img src="/banner-home.png" alt="banner" />
      </section>

      <section className={styles.sectionHeaderButtons}>
        <input type="submit" className={styles.buttonsPrimary} value="REGISTRE-SE" />
        <input type="submit" className={styles.buttonsSecondary} value="SABER MAIS" />
      </section>

    </section>

  )
}
