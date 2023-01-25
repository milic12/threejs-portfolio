import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding-top: 20px;

  img {
    transition: 400ms ease;
  }

  &:hover img {
    transform: rotate(360deg);
  }
`

const Logo = () => {
  const logo = `/images/logo.png`
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={logo} width={50} height={50} alt="logo" />
        </LogoBox>
      </a>
    </Link>
  )
}

export const MenuLogo = () => {
  const logo = `/images/logo.png`
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={logo} width={35} height={35} alt="menu home logo" />
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
