import {
  Container,
  Heading,
  Box,
  Button,
  Link,
  UnorderedList,
  ListItem,
  Flex
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import Typewriter from 'typewriter-effect'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'

const About = () => (
  <Layout title="About">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        <Typewriter
          options={{
            strings: 'About me:',
            autoStart: true,
            loop: false
          }}
        />
      </Heading>

      <Section delay={1}>
        <Paragraph>
          A software engineer who loves front-end and playing with design,
          always striving to make beautiful web apps, with clean code. Graduated
          with a master&apos;s degree in Computer Engineering and Electronics at
          the University of{' '}
          <Link color="tomato" href="https://eng.fesb.unist.hr/" isExternal>
            FESB
          </Link>
          . When I&apos;m not programming you can find me drinking coffee while
          enjoying the sea and sun. Avid reader and keen on writing
          occasionally.
        </Paragraph>
        <Flex align="center" my={4} flexDirection justifyContent={'center'}>
          <Link
            color="tomato"
            href="https://www.linkedin.com/in/manojlo-ilic/"
            isExternal
            mr={10}
          >
            <IoLogoLinkedin fontSize={'64px'} color={'tomato'} />
          </Link>
          <Link color="tomato" href="https://github.com/milic12" isExternal>
            <IoLogoGithub fontSize={'64px'} color={'tomato'} />
          </Link>
        </Flex>
      </Section>

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
            <b>Present -</b>{' '}
            <Link color="tomato" href="https://tildeloop.com/">
              TildeLoop{' '}
            </Link>
          </ListItem>
          <ListItem>
            <b>2022 -</b>{' '}
            <Link color="tomato" href="https://agilno.com/">
              Agilno
            </Link>
          </ListItem>
          <ListItem>
            <b>2021 - </b>
            <Link color="tomato" href="https://www.blankhq.co/">
              Blank{' '}
            </Link>
          </ListItem>
        </UnorderedList>
        <Paragraph> </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button colorScheme="teal">My portfolio</Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default About
export { getServerSideProps } from '../components/chakra'
