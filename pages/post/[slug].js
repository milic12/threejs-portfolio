import { Box } from '@chakra-ui/react'
import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'

export async function getStaticPaths() {
  const files = fs.readdirSync('./pages/posts')
  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`./pages/posts/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)

  return {
    props: {
      frontmatter,
      content
    }
  }
}

export default function PostPage({ frontmatter, content }) {
  return (
    <Box
      className="prose mx-auto"
      style={{
        fontSize: 'revert',
        position: 'relative',
        marginBottom: '25px'
      }}
    >
      <h1 style={{ fontSize: 'revert', marginBottom: '25px' }}>
        {frontmatter.title}
      </h1>

      <Box
        bg={'gray.800'}
        dangerouslySetInnerHTML={{
          __html: md().render(content)
        }}
        sx={{
          '& h1': {
            fontSize: 'revert'
          },
          '& p:first-of-type': {
            padding: '0px 0px 0px 0px'
          },
          '& p': {
            padding: '0px 40px 10px 40px'
          },
          '& p:last-child': {
            padding: '0px 40px 40px 40px'
          }
        }}
      ></Box>
    </Box>
  )
}
