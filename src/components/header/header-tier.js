import React from 'react'
import { Menu } from '@styled-icons/boxicons-regular'
import styles from './header-tier.module.css'

export default function HeaderTier() {
  function showModal() {
    var x = document.getElementById("modalTier");
    x.style.display = "block";
    console.log('clicado');
  }

  function showLogin() {

  }

  return (

    <section className="sectionGreenTier">

      <header className={styles.sectionHeader}>
        <nav>
          <li><a href="/login">ACESSO</a></li>
          <li><a href="/">CONTATO</a></li>
          <li><a href="/"><Menu className={styles.hamburguerMenu} /> </a></li>
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
