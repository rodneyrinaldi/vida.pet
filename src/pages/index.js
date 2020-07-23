import dynamic from 'next/dynamic'

const HeaderTier = dynamic(() => import('../components/header/header-tier.js'))
const SectionTier = dynamic(() => import('../components/section/section-tier.js'))
const FooterTier = dynamic(() => import('../components/footer/footer-tier.js'))

const TierHome = dynamic(() => import('../components/tier-home'))

function Index() {
  return (
    <>
      <HeaderTier href="/">
        <TierHome />
      </HeaderTier>
      <SectionTier href="/">
      </SectionTier>
      <SectionTier href="/">
      </SectionTier>
      <SectionTier href="/" show>
      </SectionTier>
      <SectionTier href="/">
      </SectionTier>
      <FooterTier>
      </FooterTier>
    </>
  )
}

export default Index
