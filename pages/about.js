import {
  Container,
  Heading,
  Link,
  UnorderedList,
  ListItem,
  Flex,
  Box
  // Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Typewriter from 'typewriter-effect'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { IoMailOutline } from 'react-icons/io5'
import dynamic from 'next/dynamic'

// import { useState } from 'react'
import { LoadingSpinner } from '../components/aboutPageLoader'

const PersonalAvatar = dynamic(() => import('../components/personalAvatar'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})

const CrazyAvatar = dynamic(() => import('../components/crazyAvatar'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})

const About = () => {
  // to be added for multiple avatars
  // const [changeAvatar, setChangeAvatar] = useState(false)
  // const [isHovered, setIsHovered] = useState(false)

  return (
    <Layout title="About">
      <Container maxW="850px">
        <Heading as="h3" fontSize={20} mb={4}>
          <Typewriter
            options={{
              strings: 'About me:',
              autoStart: true,
              loop: false
            }}
          />
        </Heading>

        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          direction={{
            base: 'column',
            sm: 'column',
            lg: 'row'
          }}
        >
          <Box
            // maxW={{ base: '100%', md: 550 }}
            // marginLeft={-200}
            gap={2}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            marginBottom={{ base: 50, md: 20 }}
            justifyContent={'center'}
            alignItems={'center'}
            position={'relative'}
          >
            {!changeAvatar ? <PersonalAvatar /> : <CrazyAvatar />}
            {/* <Flex
              gap={2}
              style={{
                position: 'absolute',
                bottom: isHovered ? '10px' : '-10px',
                transition: 'top ease 0.5s'
              }}
            >
              {isHovered && (
                <>
                  <Button onClick={() => setChangeAvatar(false)}>
                    Normal mode
                  </Button>
                  <Button onClick={() => setChangeAvatar(true)}>
                    Programming mode
                  </Button>
                </>
              )}
            </Flex> */}
          </Box>
          <Section delay={1}>
            <Box maxW={{ base: '100%', md: 550 }} padding={{ base: 25, md: 0 }}>
              <Paragraph>
                A software engineer who loves front-end and playing with design,
                always striving to make beautiful web apps, with clean code.
                Graduated with a master&apos;s degree in Computer Engineering
                and Electronics at the University of{' '}
                <Link
                  color="tomato"
                  href="https://eng.fesb.unist.hr/"
                  isExternal
                >
                  FESB
                </Link>
                . When I&apos;m not programming you can find me drinking coffee
                while enjoying the sea and sun. Avid reader and keen on writing
                occasionally.
              </Paragraph>

              <Flex
                align="center"
                my={4}
                flexDirection
                justifyContent={'center'}
              >
                <Link
                  color="tomato"
                  href="https://www.linkedin.com/in/manojlo-ilic/"
                  isExternal
                  mr={10}
                >
                  <IoLogoLinkedin fontSize={'64px'} color={'tomato'} />
                </Link>
                <Link
                  color="tomato"
                  href="https://github.com/milic12"
                  isExternal
                  mr={10}
                >
                  <IoLogoGithub fontSize={'64px'} color={'tomato'} />
                </Link>
                <Link
                  color="tomato"
                  href="mailto:milic1289@gmail.com"
                  isExternal
                >
                  <IoMailOutline fontSize={'64px'} color={'tomato'} />
                </Link>
              </Flex>
            </Box>
          </Section>
        </Flex>

        <Heading as="h3" fontSize={20}>
          <Typewriter
            options={{
              strings: 'Experience:',
              autoStart: true,
              loop: false
            }}
          />
        </Heading>

        <Section delay={1.5}>
          <UnorderedList>
            <ListItem>
              <b>Present -</b>
              <span style={{ color: 'tomato' }}>GravityVector </span>
            </ListItem>
            <ListItem>
              <b>2023/2024 -</b>{' '}
              <span style={{ color: 'tomato' }}>BrainIt </span>
            </ListItem>
            <ListItem>
              <b>2023 -</b> <span style={{ color: 'tomato' }}>TildeLoop </span>
            </ListItem>
            <ListItem>
              <b>2022 -</b> <span style={{ color: 'tomato' }}>Agilno</span>
            </ListItem>
            <ListItem>
              <b>2021 - </b>
              <span style={{ color: 'tomato' }}>Blank </span>
            </ListItem>
          </UnorderedList>
        </Section>
      </Container>
    </Layout>
  )
}

export default About
export { getServerSideProps } from '../components/chakra'
