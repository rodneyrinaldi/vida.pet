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
      <div className={styles.text}>
        <h1>PROTEJA</h1>
        <div>
          <h2>FAÇA PARTE DA</h2>
          <h2><span>COMUNIDADE</span></h2>
          <h1>SEU AMIGO</h1>
          <h2>QR CODE NO PET</h2>
          <h2>PARA LOCALIZAÇÂO</h2>
        </div>
      </div>
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
