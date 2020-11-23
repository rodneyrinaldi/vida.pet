import Link from 'next/link'
import styles from './alert-tier.module.css'

export default function AlertTier() {
  function showModal() {
    var x = document.getElementById("modalTier");
    x.style.display = "block";
    console.log('clicado');
  }

  return (

    <section className="sectionWhiteTier">

      <section className={styles.homeAlertImg}>
        <Link href="/alert">
          <a><img src="/banner-alert.png" alt="banner" /></a>
        </Link>
      </section>

      <section className={styles.homeAlertButtons}>
        <input onClick={showModal} type="submit" className={styles.buttonsSecondary} value="SAIBA MAIS" />
      </section>

    </section>

  )
}
