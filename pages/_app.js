import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import * as ga from '../lib/googleAnalytics'
import { useEffect } from 'react'
import Script from 'next/script'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        id="ga"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () {
              dataLayer.push(arguments);
            };
            window.gtag('js', new Date());
            window.gtag('config','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />

      <Chakra cookies={pageProps.cookies}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Chakra>
    </>
  )
}

export default Website
