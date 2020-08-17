import Link from 'next/link'
import styles from './panel-tier.module.css'

export default function PanelTier() {
  return (

    <section className="sectionGreenTier">

      <section className={styles.sectionPanelImg}>
        <img src="/banner-panel.png" alt="banner" />
      </section>

      <section className={styles.sectionPanelButtons}>
        <Link href="/panel">
          <a><input type="submit" className={styles.buttonsSecondary} value="SAIBA MAIS" /></a>
        </Link>
      </section>

    </section>

  )
}
