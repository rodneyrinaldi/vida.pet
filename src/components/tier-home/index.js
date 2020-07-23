import styles from './index.module.css'

function TierHome() {
  return (
    <>
      <header className={styles.header}>
        <a href="/"><img src="/vida.pet.png" alt="logo" /></a>
        <nav>
          <li><a href="/">ACESSO</a></li>
          <li><a href="/">CONTATO</a></li>
          <li><a href="/"><img src="/img-menu.png" alt="menu" /></a></li>
        </nav>
      </header>


      <h1 className={styles.title1}>PROTEJA</h1>
      <h1 className={styles.title1}>SEU</h1>
      <h1 className={styles.title1}>AMIGO</h1>

      <h2 className={styles.title2}>FAÇA PARTE</h2>
      <h2 className={styles.title2}>COMUNIDADE</h2>

      <h2 className={styles.title2}>QR CODE PET</h2>
      <h2 className={styles.title2}>LOCALIZAÇÂO</h2>

      <div className={styles.logo}>
        <img src="/img-header.png" alt="banner" />
      </div>
      <div className={styles.buttons1}>
        <input type="submit" value="SABER MAIS" />
      </div>
      <div className={styles.buttons2}>
        <input type="submit" value="REGISTRE-SE" />
      </div>
    </>
  )
}

export default TierHome
