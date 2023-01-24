import {
  Box,
  Container,
  Center,
  Heading,
  Text,
  Stack,
  Spinner
} from '@chakra-ui/react'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Typewriter from 'typewriter-effect'

export async function getStaticProps() {
  const files = fs.readdirSync('./pages/posts')

  const posts = files.map(fileName => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`./pages/posts/${fileName}`, 'utf-8')
    const { data: frontmatter, content } = matter(readFile)

    const readingTime = () => {
      const WORDS_PER_MINUTE = 200
      let result = {}

      const regex = /\w+/g
      result.wordCount = (content || '').match(regex)?.length

      result.readingTime = Math.ceil(result.wordCount / WORDS_PER_MINUTE)
      return result
    }
    const readingTimeNumber = readingTime().readingTime

    return {
      slug,
      frontmatter,
      readingTimeNumber
    }
  })

  return {
    props: {
      posts
    }
  }
}

const Blog = ({ posts }) => {
  const [loadingAnimation, setLoadingAnimation] = useState(false)

  return (
    <Layout title="Blog">
      <Container maxW="1920px">
        <Heading as="h3" fontSize={20} mb={4}>
          <Typewriter
            options={{
              strings: 'Blog:',
              autoStart: true,
              loop: false
            }}
          />
        </Heading>
        <Box>
          <Section delay={1.5}>
            {posts.map(({ slug, frontmatter, readingTimeNumber }) => (
              <Center py={6} key={slug}>
                {frontmatter.externalLink === true ? (
                  <Link href={frontmatter.UrlLink}>
                    <a onClick={() => setLoadingAnimation(true)}>
                      {loadingAnimation ? (
                        <Spinner size="xl" />
                      ) : (
                        <Box
                          maxW={'550px'}
                          w={'full'}
                          bg={'gray.900'}
                          boxShadow={'2xl'}
                          rounded={'md'}
                          p={6}
                          overflow={'hidden'}
                        >
                          <Box
                            h={'280px'}
                            // bg={'gray.100'}
                            bg={'gray.900'}
                            mt={-6}
                            mx={-6}
                            mb={6}
                            pos={'relative'}
                          >
                            <Image
                              src={frontmatter.socialImage}
                              layout={'fill'}
                              objectFit={'cover'}
                              alt={frontmatter.title}
                            />
                          </Box>
                          <Stack>
                            <Text
                              color={'tomato'}
                              textTransform={'uppercase'}
                              fontWeight={800}
                              fontSize={'sm'}
                              letterSpacing={1.1}
                            >
                              Blog
                            </Text>
                            <Heading
                              color={'gray.100'}
                              fontSize={'2xl'}
                              fontFamily={'body'}
                            >
                              {frontmatter.title}
                            </Heading>
                            <Text color={'gray.500'}>
                              {frontmatter.description}
                            </Text>
                          </Stack>
                          <Stack
                            mt={6}
                            direction={'row'}
                            spacing={4}
                            align={'center'}
                          >
                            <Stack
                              direction={'column'}
                              spacing={0}
                              fontSize={'sm'}
                            >
                              <Text fontWeight={600}>Manojlo Ilic</Text>
                              <Text color={'gray.500'}>
                                {frontmatter?.readingTimeNumber} min read
                              </Text>
                            </Stack>
                          </Stack>
                        </Box>
                      )}
                    </a>
                  </Link>
                ) : (
                  <Link href={`/post/${slug}`}>
                    <a onClick={() => setLoadingAnimation(true)}>
                      {loadingAnimation ? (
                        <Spinner size="xl" />
                      ) : (
                        <Box
                          maxW={'550px'}
                          w={'full'}
                          bg={'gray.900'}
                          boxShadow={'2xl'}
                          rounded={'md'}
                          p={6}
                          overflow={'hidden'}
                        >
                          <Box
                            h={'280px'}
                            // bg={'gray.100'}
                            bg={'gray.900'}
                            mt={-6}
                            mx={-6}
                            mb={6}
                            pos={'relative'}
                          >
                            <Image
                              src={frontmatter.socialImage}
                              layout={'fill'}
                              objectFit={'cover'}
                              alt={frontmatter.title}
                            />
                          </Box>
                          <Stack>
                            <Text
                              color={'tomato'}
                              textTransform={'uppercase'}
                              fontWeight={800}
                              fontSize={'sm'}
                              letterSpacing={1.1}
                            >
                              Blog
                            </Text>
                            <Heading
                              color={'gray.100'}
                              fontSize={'2xl'}
                              fontFamily={'body'}
                            >
                              {frontmatter.title}
                            </Heading>
                            <Text color={'gray.500'}>
                              {frontmatter.description}
                            </Text>
                          </Stack>
                          <Stack
                            mt={6}
                            direction={'row'}
                            spacing={4}
                            align={'center'}
                          >
                            <Stack
                              direction={'column'}
                              spacing={0}
                              fontSize={'sm'}
                            >
                              <Text fontWeight={600}>Manojlo Ilic</Text>
                              <Text color={'gray.500'}>
                                Feb 08, 2023 · {readingTimeNumber} min read
                              </Text>
                            </Stack>
                          </Stack>
                        </Box>
                      )}
                    </a>
                  </Link>
                )}
              </Center>
            ))}
          </Section>
        </Box>
      </Container>
    </Layout>
  )
}
export default Blog
