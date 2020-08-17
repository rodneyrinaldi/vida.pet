import dynamic from 'next/dynamic'

const HeaderTier = dynamic(() => import('../components/header/header-tier.js'))
const RegisterTier = dynamic(() => import('../components/section/register-tier.js'))
const AlertTier = dynamic(() => import('../components/section/alert-tier.js'))
const PanelTier = dynamic(() => import('../components/section/panel-tier.js'))
const ContactTier = dynamic(() => import('../components/section/contact-tier.js'))
const FooterTier = dynamic(() => import('../components/footer/footer-tier.js'))

function Index() {
  return (
    <>
      <HeaderTier />
      <RegisterTier />
      <AlertTier />
      {/* <PanelTier />
      <ContactTier />
      <FooterTier /> */}
    </>
  )
}

export default Index
