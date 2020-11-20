import React from 'react'

import styles from './header-tier.module.css'

import Access from '../access/index'

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
          <li><a href="/services">SERVIÇOS</a></li>
          <li><a href="#contactLayer">CONTATO</a></li>
          <li><Access /></li>
        </nav>
      </header>

      <section className={styles.sectionHeaderImg}>
        <h1>v i d a . p e t</h1>
        <img src="/banner-home.png" alt="banner" />
      </section>

      <section className={styles.sectionHeaderButtons}>
        <a href="/signin"><input type="submit" className={styles.buttonsPrimary} value="CADASTRE-SE" /></a>
        <input onClick={showModal} type="submit" className={styles.buttonsSecondary} value="SAIBA MAIS" />
      </section>

    </section>

  )
}
