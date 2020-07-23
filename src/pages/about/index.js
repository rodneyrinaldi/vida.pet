import Router from 'next/router'

import NavLink from '../components/common/navlink'

function About() {
  return (
    <>
      <NavLink href={Router.back()}>VOLTAR</NavLink>
    </>
  )
}

export default About
