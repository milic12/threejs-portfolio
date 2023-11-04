import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Image,
  Button,
  Center,
  Text,
  Stack
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { portfolioData, agencyWork } from '../components/works/portfolioData'
import Section from '../components/section'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'

const Portfolio = () => (
  <Layout title="Portfolio">
    <Container maxW="1920px">
      <Heading as="h3" fontSize={20} mb={4}>
        Portfolio
      </Heading>
      <Heading as="h4" fontSize={18} mb={4}>
        <Typewriter
          options={{
            strings: 'Agency work:',
            autoStart: true,
            loop: false
          }}
        />
      </Heading>
      <Section delay={1.5}>
        <SimpleGrid columns={[1, 1, 2]} gap={12} delay={5}>
          {agencyWork.map((item, index) => (
            <Link href={item.urlLink || ''} key={index}>
              <a target="_blank">
                <Box>
                  <Center py={12}>
                    <Box
                      role={'group'}
                      maxW={'330px'}
                      height={'330px'}
                      w={'full'}
                      bg={'gray.800'}
                      boxShadow={'2xl'}
                      rounded={'lg'}
                      pos={'relative'}
                      zIndex={1}
                    >
                      <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'150px'}
                        _after={{
                          transition: 'all .3s ease',
                          content: '""',
                          w: 'full',
                          h: 'full',
                          pos: 'absolute',
                          top: 5,
                          left: 0,
                          backgroundImage: `url(${item.imageUrl.src})`,
                          filter: 'blur(15px)',
                          zIndex: -1
                        }}
                        _groupHover={{
                          _after: {
                            filter: 'blur(20px)'
                          }
                        }}
                      >
                        <Image
                          rounded={'lg'}
                          height="100%"
                          width="100%"
                          objectFit={'contain'}
                          src={item.imageUrl.src}
                          alt={item.title}
                        />
                      </Box>
                      <Stack pt={10} pb={5} align={'center'}>
                        <Text
                          color={'tomato'}
                          fontSize={'sm'}
                          textTransform={'uppercase'}
                          px={2}
                        >
                          {item.title}
                        </Text>
                        <Text
                          color={'gray.500'}
                          fontSize={'sm'}
                          textTransform={'none'}
                          align={'center'}
                          p={2}
                        >
                          {item?.description}
                        </Text>
                        <Heading
                          fontSize={'xl'}
                          fontFamily={'body'}
                          fontWeight={500}
                          pb={5}
                        >
                          {item.stack}
                        </Heading>
                      </Stack>
                    </Box>
                  </Center>
                </Box>
              </a>
            </Link>
          ))}
        </SimpleGrid>
      </Section>
      <Heading as="h4" fontSize={18} mb={4}>
        <Typewriter
          options={{
            strings: 'Personal Portfolio:',
            autoStart: true,
            loop: false
          }}
        />
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={12}>
        {portfolioData.map((item, index) => (
          <Box key={index}>
            <Center py={12}>
              <Box
                role={'group'}
                maxW={'330px'}
                height={'400px'}
                w={'full'}
                bg={'gray.800'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'150px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${item.imageUrl.src})`,
                    filter: 'blur(15px)',
                    zIndex: -1
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)'
                    }
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height="100%"
                    width="100%"
                    objectFit={'fill'}
                    src={item.imageUrl.src}
                    alt={item.title}
                  />
                </Box>
                <Stack pt={10} pb={5} align={'center'}>
                  <Text
                    color={'gray.500'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                    px={2}
                  >
                    {item.title}
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                    p={5}
                  >
                    {item.stack}
                  </Heading>
                  <Text
                    color={'gray.500'}
                    fontSize={'sm'}
                    textTransform={'none'}
                    align={'center'}
                    p={2}
                  >
                    {item?.description}
                  </Text>
                  <Stack
                    direction={'row'}
                    align={'center'}
                    position={'absolute'}
                    style={{ right: 0, bottom: 20, left: 60 }}
                  >
                    <Link href={item.urlLinkGithub || ''}>
                      <a target="_blank">
                        <Button
                          colorScheme="blue"
                          mr={3}
                          disabled={!item.urlLinkGithub}
                        >
                          Github
                        </Button>
                      </a>
                    </Link>
                    <Link href={item.urlLinkDemo || ''}>
                      <a target="_blank">
                        <Button
                          colorScheme="blue"
                          disabled={!item.urlLinkDemo}
                          ml={2}
                        >
                          Live Demo
                        </Button>
                      </a>
                    </Link>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Portfolio
