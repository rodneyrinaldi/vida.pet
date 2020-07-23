import Link from 'next/link'

import styles from './nav-link.module.css'

export default function NavLink({ children, href }) {
  return (
    <>
      <Link className={styles.nav - link} href={href}>
        <a>{children}</a>
      </Link>
    </>
  )
}

