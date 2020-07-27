import dynamic from 'next/dynamic'

const HeaderTier = dynamic(() => import('../components/header/header-tier.js'))
const SectionGreenTier = dynamic(() => import('../components/section/section-green-tier.js'))
const SectionWhiteTier = dynamic(() => import('../components/section/section-white-tier.js'))
const FooterTier = dynamic(() => import('../components/footer/footer-tier.js'))

function Index() {
  return (
    <>
      <HeaderTier />

      <SectionWhiteTier href="/">
        <p>register</p>
      </SectionWhiteTier>

      <SectionWhiteTier href="/">
        <p>alert</p>
      </SectionWhiteTier>

      <SectionGreenTier href="/">
        <p>panel</p>
      </SectionGreenTier>

      <SectionWhiteTier href="/">
        <p>anoncment</p>
      </SectionWhiteTier>

      <FooterTier />
    </>
  )
}

export default Index
