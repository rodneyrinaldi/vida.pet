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
        <p>REGISTRO DE LOCALIZADOR</p>
      </SectionTier>
      <SectionTier href="/">
        <p>ALERTA DE LOCALIZAÇÃO</p>
      </SectionTier>
      <SectionTier href="/" show>
        <p>PAINEL DE ANUNCIOS DE ANIMAIS</p>
      </SectionTier>
      <SectionTier href="/">
        <p>ENTRE EM CONTATO</p>
      </SectionTier>
      <FooterTier>
        <p>footer</p>
      </FooterTier>
    </>
  )
}

export default Index
