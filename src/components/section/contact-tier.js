import React from 'react'
import styles from './contact-tier.module.css'

export default function contactTier() {
  return (
    <section id="contactLayer" name="contactLayer" className="sectionGreenTier">
      <form method="post" action="#" className={styles.sectionContact} >
        <h2>Entre em contato</h2>
        <input type="text" name="name" placeholder="Nome" id="name" />
        <input type="email" name="email" placeholder="E-mail" id="email" />
        <textarea type="message" name="Message" placeholder="Mensagem" id="message" rows="5" />
        <section className={styles.sectionContactButtons}>
          <input type="submit" className={styles.buttonsPrimary} value="ENVIAR" />
        </section>
      </form>
    </section>
  )
}
