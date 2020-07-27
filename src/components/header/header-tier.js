// import NavLink from '../common/nav-link'
import styles from './header-tier.module.css'

export default function HeaderTier() {
  return (

    <section className="sectionGreenTier">

      <header className={styles.sectionHeader}>
        <div>
          <a href="/"><img src="/logo-img.png" alt="logo" className={styles.sectionHeaderLogoImg} /></a>
          <a href="/"><img src="/logo-txt.png" alt="logo" className={styles.sectionHeaderLogoTxt} /></a>
        </div>
        <nav>
          <li><a href="/">ACESSO</a></li>
          <li><a href="/">CONTATO</a></li>
          <li><a href="/">=</a></li>
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
