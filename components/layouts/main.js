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
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Software engineer| Web Developer | JavaScript | NodeJS"
          />
          <meta name="author" content="Manojlo Ilic" />
          <link rel="shortcut icon" href="/favicon2.ico" type="image/x-icon" />
          <meta property="og:site_name" content="Manojlo Ilic" />
          <meta name="og:title" content="Manojlo Ilic" />
          <meta property="og:type" content="Portfolio website" />
          <meta property="og:image" content="/images/logo.png" />
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
