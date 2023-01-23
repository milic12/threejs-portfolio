import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import LoadingSpinner from '../loader'

const MyOffice = dynamic(() => import('../myOffice'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})

const ParticlesBackground = dynamic(() => import('../ParticleBackground'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})

const Main = ({ children, router }) => {
  return (
    <>
      {/*  <div>
        <p style={{ color: 'red', height: '100%' }}>SOMETHING</p>
        <AnimatedBackground />
      </div> */}
      {/*  <AnimatedBackground /> */}
      <Box as="main" pb={8}>
        {/* <AnimatedBackground /> */}
        {/* <ParticlesBackground /> */}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Manojlo Ilic" />
          <meta name="author" content="Manojlo Ilic" />
          <meta name="author" content="craftzdog" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon2.ico" type="image/x-icon" />
          <meta property="og:site_name" content="Manojlo Ilic" />
          <meta name="og:title" content="Manojlo Ilic" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="add link" />
          <title>Manojlo Ilic</title>
        </Head>

        <NavBar path={router.asPath} />
        <ParticlesBackground />
        <Container maxW="container.md" pt={14}>
          <MyOffice />
          {children}

          <Footer />
        </Container>
      </Box>
    </>
  )
}

export default Main
