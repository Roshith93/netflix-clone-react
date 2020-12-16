import { Link as ReachRouterLink } from 'react-router-dom'
import {
  Background,
  Container,
  Link,
  Group,
  SearchInput,
  Search,
  SearchIcon,
  ButtonLink,
  Picture,
  Dropdown,
  Profile,
  Feature,
  FeatureCallOut,
  Text,
  Logo,
  PlayButton,
} from './styles/Header'

export const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

const HeaderFrame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}
const HeaderButtonLink = ({ children, ...restProps }) => {
 return <ButtonLink {...restProps}>{children}</ButtonLink>
}
const HeaderLogo = ({ to, ...restProps }) => {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  )
}

Header.Container = HeaderFrame
Header.Logo = HeaderLogo
Header.ButtonLink = HeaderButtonLink
