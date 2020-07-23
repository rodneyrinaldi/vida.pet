// import NavLink from '../common/nav-link'
import styles from './header-tier.module.css'

export default function HeaderTier({ children, href }) {
  return (
    <section className={styles.headerTier}>
      {children}
    </section>
  )
}