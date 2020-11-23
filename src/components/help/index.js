import { useRouter } from 'next/router';
import { useEffect } from 'react'

import style from './index.module.css'

export default function HelpComponent() {
  //const router = useRouter();

  useEffect(() => {
    const x = 1
  }, [])

  return (
    <div className={style.back}>

      <h1 className={style.url}>www.vida.pet</h1>

      <h2 className={style.petName}>scooby doo</h2>

      <img src="/banner-lost.jpg" alt="pet perdido" className={style.petImg} />

      <h4 className={style.urlLink}>{`www.vida.pet/help?pet=${'xx'}`}</h4>

      <div className={style.advise}>
        <div><img src="/dog-happy.png" alt="logo" className={style.dogs} /></div>
        <div><img src="/whatsapp.png" alt="logo" className={style.whats} /></div>
      </div>

      <a href="#" className={style.sharePosition}>Compartilhar sua posição geográfica</a>

    </div>
  )
}