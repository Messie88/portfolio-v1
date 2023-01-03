import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'styled-components'
import { Inter } from '@next/font/google'

import Header from '@/config'
import Layout from '@/components/dom/layout'

import { theme, GlobalStyle } from '@/styles/theme'
import '@/styles/index.css'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()
  return (
    <ThemeProvider theme={theme}>
      <Header title={pageProps.title} />
      <main className={inter.className}>
        <Layout ref={ref}>
          <GlobalStyle />
          <Component {...pageProps} />
          {/* The canvas can either be in front of the dom or behind. If it is in front it can overlay contents.
           * Setting the event source to a shared parent allows both the dom and the canvas to receive events.
           * Since the event source is now shared, the canvas would block events, we prevent that with pointerEvents: none. */}
          {/* {Component?.canvas && (
            <Scene
              //  className='pointer-events-none'
              eventSource={ref}
              eventPrefix='client'>
              {Component.canvas(pageProps)}
            </Scene>
          )} */}
        </Layout>
      </main>
    </ThemeProvider>
  )
}
