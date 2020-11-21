import dynamic from 'next/dynamic'

const Alert = dynamic(() => import('../../components/alert/index'))

export default function AlertPage() {

  return (
    <Alert />
  )
}