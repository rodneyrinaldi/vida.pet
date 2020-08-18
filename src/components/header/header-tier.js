import React from 'react'
import { Menu } from '@styled-icons/boxicons-regular'
import styles from './header-tier.module.css'

export default function HeaderTier() {
  function showModal() {
    var x = document.getElementById("modalTier");
    x.style.display = "block";
    console.log('clicado');
  }

  return (

    <section className="sectionGreenTier">

      <header className={styles.sectionHeader}>
        <nav>
          <li><a href="/">ACESSO</a></li>
          <li><a href="/">CONTATO</a></li>
          <li><a href="/"><Menu className={styles.hamburguerMenu} /> </a></li>
        </nav>
      </header>

      <section className={styles.sectionHeaderImg}>
        <img src="/banner-home.png" alt="banner" />
      </section>

      <section className={styles.sectionHeaderButtons}>
        <input type="submit" className={styles.buttonsPrimary} value="REGISTRE-SE" />
        <input onClick={showModal} type="submit" className={styles.buttonsSecondary} value="SAIBA MAIS" />
      </section>

    </section>

  )
}
