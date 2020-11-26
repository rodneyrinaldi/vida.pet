import React from "react"

import '../css/reset.css'
import '../css/style.css'

export default function MyApp({ Component, pageProps, router }) {

  return (
    <Component {...pageProps} />
  )
}