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
      <a onClick={showModal}><MessageSquareX className={styles.close} /></a>
    </section>
  )
}

