import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { motion } from 'framer-motion';

import style from './index.module.css'


export default function HelpComponent() {
  const router = useRouter();

  useEffect(() => {
    const x = 1
  }, [])

  const postVariants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className={style.back}>

        <h1 className={style.url}>www.vida.pet</h1>

        <h2 className={style.petName}>scooby doo</h2>

        <img src="/banner-lost.jpg" alt="pet perdido" className={style.petImg} />

        <h4 className={style.urlLink}>{`www.vida.pet/help?pet=${'xx'}`}</h4>

        <div className={style.advise}>
          <a>
            <motion.div variants={postVariants}>
              <motion.div whileHover="hover" variants={{ hover: { scale: 0.96 } }}>
                <img src="/b-speak.png" className={style.whats} />
              </motion.div>
              <h2>voz proprietário</h2>
            </motion.div>
          </a>
          <a>
            <motion.div variants={postVariants}>
              <motion.div whileHover="hover" variants={{ hover: { scale: 0.96 } }}>
                <img src="/b-camera.png" className={style.whats} />
              </motion.div>
              <h2>foto proprietário</h2>
            </motion.div>
          </a>
          <a>
            <motion.div variants={postVariants}>
              <motion.div whileHover="hover" variants={{ hover: { scale: 0.96 } }}>
                <img src="/b-whats.png" className={style.whats} />
              </motion.div>
              <h2>whatsapp proprietário</h2>
            </motion.div>
          </a>
        </div>

        <a href="#" className={style.sharePosition}>Compartilhar sua posição geográfica</a>

      </div>

    </motion.div>
  )
}