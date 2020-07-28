import styles from './panel-tier.module.css'

export default function PanelTier() {
  return (

    <section className="sectionEmptyTier">

      <section className={styles.sectionPanelImg}>
        <img src="/banner-panel.png" alt="banner" />
      </section>

      <section className={styles.sectionPanelButtons}>
        <input type="submit" className={styles.buttonsSecondary} value="SABER MAIS" />
      </section>

    </section>

  )
}
