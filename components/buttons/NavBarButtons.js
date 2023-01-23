import { Box, Link, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import styles from '../config/App.module.css'

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href
  console.log('path', path)
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        className={active ? styles.btnActive : undefined}
        textDecoration={'underline'}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}
const NavBarButtons = props => {
  const { path } = props

  return (
    <Box>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <LinkItem href="/about" path={path}>
          <div className={styles.container}>
            <div className={styles.center}>
              <button className={styles.btn}>
                <svg
                  className={styles.svg}
                  width="80px"
                  height="46px"
                  viewBox="0 0 180 65"
                >
                  <polyline points="179,1 179,59 1,59 1,1 179,1" />
                  <polyline points="179,1 179,59 1,59 1,1 179,1" />
                </svg>
                <span>About</span>
              </button>
            </div>
          </div>
        </LinkItem>
        <LinkItem href="/portfolio" path={path}>
          <div className={styles.container}>
            <div className={styles.center}>
              <button className={styles.btn}>
                <svg
                  className={styles.svg}
                  width="80px"
                  height="45px"
                  viewBox="0 0 180 60"
                >
                  <polyline points="179,1 179,59 1,59 1,1 179,1" />
                  <polyline points="179,1 179,59 1,59 1,1 179,1" />
                </svg>
                <span>Portfolio</span>
              </button>
            </div>
          </div>
        </LinkItem>
        <LinkItem href="/blog" path={path}>
          <div className={styles.container}>
            <div className={styles.center}>
              <button className={styles.btn}>
                <svg
                  className={styles.svg}
                  width="80px"
                  height="45px"
                  viewBox="0 0 180 60"
                >
                  <polyline points="179,1 179,59 1,59 1,1 179,1" />
                  <polyline points="179,1 179,59 1,59 1,1 179,1" />
                </svg>
                <span>Blog</span>
              </button>
            </div>
          </div>
        </LinkItem>
      </Stack>
    </Box>
  )
}

export default NavBarButtons
