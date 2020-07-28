import styles from './contact-tier.module.css'

export default function ContactTier() {
  return (
    <section className="sectionWhiteTier">
      <section className={styles.sectionContact}>
        <form method="post" action="#">
          <div className={styles.columnWrapper}>
            <input type="text" name="name" placeholder="Nome" id="name" />
          </div>
          <div className={styles.divSpace} />
          <div className={styles.columnWrapper}>
            <input type="email" name="email" placeholder="E-mail" id="email" />
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.columnWrapper} >
              <textarea type="message" name="Message" placeholder="Mensagem" id="message" rows="5" />
            </div>
          </div>

          <div className={styles.sectionContactButtons}>
            <div className={styles.buttonsSecondary}>
              <button type="submit" to="/success">ENVIAR</button>
            </div>
            <div className={styles.divSpace} />
            <div className={styles.buttonsSecondary}>
              <input type="reset" value="LIMPAR" />
            </div>
          </div>

        </form>
      </section>
    </section>
  )
}
