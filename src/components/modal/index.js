import styles from './index.module.css'

import { MessageSquareX } from '@styled-icons/boxicons-regular'

export default function ModalTier() {
  function showModal() {
    var x = document.getElementById("modalTier");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <section id="modalTier" className={styles.sectionModal}>
      <div>
        <a onClick={showModal}><MessageSquareX className={styles.close} /></a>
      </div>
      <div className={styles.box}>
        <h1 className={styles.title}>Lorem ipsum dolor</h1>
        <h2 className={styles.subtitle}>Lorem ipsum dolor sit amet</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
  )
}

