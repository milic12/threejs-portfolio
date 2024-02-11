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
            fontSize: '2.5em',
            fontWeight: 'bold',
            padding: '10px 40px 0px 40px'
          },
          '& h2': {
            fontSize: '2em',
            fontWeight: 'bold',
            padding: '10px 40px 0px 40px'
          },
          '& h3': {
            fontSize: '1.5em',
            fontWeight: 'bold',
            padding: '10px 40px 0px 40px'
          },
          '& h4': {
            fontSize: '1.2em',
            fontWeight: 'bold',
            padding: '10px 40px 0px 40px'
          },
          '& p:first-of-type': {
            padding: '0px 0px 0px 0px'
          },
          '& p': {
            padding: '0px 40px 10px 40px'
          },
          '& p:last-child': {
            padding: '0px 40px 40px 40px'
          },
          '& ul': {
            padding: '0px 40px 10px 60px'
          },

          '& code': {
            fontFamily: 'Courier New, monospace',
            backgroundColor: '#333',
            color: '#fff',
            padding: '2px 4px'
          },
          '& pre': {
            padding: '0px 60px 10px 60px',
            backgroundColor: '#333', // Dark background color
            color: '#fff', // Text color for pre
            padding: '10px',
            border: '1px solid #555', // Dark border color
            borderRadius: '4px',
            overflow: 'auto'
          },
          '& p:has(img)': {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px'
          },
          '& a': {
            color: 'hotpink',
            textDecoration: 'underline'
          }
        }}
      ></Box>
    </Box>
  )
}
