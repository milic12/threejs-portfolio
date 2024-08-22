import { Container, Box, useColorModeValue, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="20px" color={useColorModeValue('#ff2c06', 'tomato')}>
          Hi, I&apos;m an software engineer based in Split, Croatia!
        </Text>
        <Typewriter
          options={{
            strings: ['React', 'React Native', 'Next.js', 'Vue.js', 'Node.js'],
            autoStart: true,
            loop: true
          }}
        />
      </Box>

      <Box display={{ md: 'flex' }} alignItems="center" justifyContent="center">
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          mb={18}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            borderColor="tomato"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/manojlo.png"
              width="100%"
              height="100%"
              alt="Profile image"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
