// import NavLink from '../common/nav-link'
import styles from './footer-tier.module.css'

export default function FooterTier({ children, href }) {
  return (
    <section className={styles.footerTier}>
      {children}
    </section>
  )
}