import styles from './section-tier.module.css'

export default function SectionTier({ children, href, show }) {
  return (
    <section className={!show ? styles.sectionTier : styles.SectionTierImg}>
      {children}
    </section>
  )
}