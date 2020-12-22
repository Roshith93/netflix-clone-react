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

Header.Frame = function HeaderFrame({ children, ...restProps }) {
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
const HeaderFeature = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>
}
const HeaderText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
const HeaderFeatureCallOut = ({ children, ...restProps }) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}
const HeaderTextLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>
}
const HeaderGroup = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>
}

const HeaderProfile = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>
}
const HeaderDropdown = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

const HeaderPlayButton = ({ children, ...restProps }) => {
  return <PlayButton {...restProps}>{children}</PlayButton>
}

const HeaderPicture = ({ src, ...restProps }) => {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Logo = HeaderLogo
Header.ButtonLink = HeaderButtonLink
Header.Feature = HeaderFeature
Header.Text = HeaderText
Header.FeatureCallOut = HeaderFeatureCallOut
Header.TextLink = HeaderTextLink
Header.Group = HeaderGroup
Header.Profile = HeaderProfile
Header.Dropdown = HeaderDropdown
Header.PlayButton = HeaderPlayButton
Header.Picture = HeaderPicture
