import dynamic from 'next/dynamic'

const HeaderTier = dynamic(() => import('../components/header/header-tier.js'))
const RegisterTier = dynamic(() => import('../components/home/register-tier.js'))
const AlertTier = dynamic(() => import('../components/home/alert-tier.js'))
const ContactTier = dynamic(() => import('../components/home/contact-tier.js'))
const FooterTier = dynamic(() => import('../components/footer/footer-tier.js'))

function Index() {

  return (
    <>
      <HeaderTier />
      <RegisterTier />
      <AlertTier />
      <ContactTier />
      <FooterTier />
    </>
  )
}

export default Index
