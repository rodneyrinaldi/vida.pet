import dynamic from 'next/dynamic'

const AlertComponent = dynamic(() => import('../../components/alert/index'))

export default function Alert() {

  return (
    <>
      <AlertComponent />
    </>
  )
}