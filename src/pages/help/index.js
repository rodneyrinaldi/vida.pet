import dynamic from 'next/dynamic'

const HelpComponent = dynamic(() => import('../../components/help/index'))

export default function Help() {

  return (
    <>
      <HelpComponent />
    </>
  )
}