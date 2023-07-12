import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import React from 'react'

const AppBody = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
)

export default AppBody
