import React from "react"

import '../css/reset.css'
import '../css/style.css'

export default function MyApp({ Component, pageProps, router }) {

  // if (router.pathname.startsWith('/')) {
  //   return (<Component {...pageProps} />)
  // }
  // else {
  //   return (<Component {...pageProps} />)
  // }

  return (<Component {...pageProps} />)
}