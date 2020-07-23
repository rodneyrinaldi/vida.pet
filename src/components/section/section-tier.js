// import NavLink from '../common/nav-link'
import styles from './section-tier.module.css'

export default function SectionTier({ children, href, show }) {
  return (
    <section className={show ? styles.sectionTierImg : styles.SectionTier}>
      {children}
    </section>
  )
}