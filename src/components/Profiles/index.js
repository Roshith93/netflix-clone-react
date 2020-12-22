import { Container, Title, List, Name, Picture, Item, User } from './styles/Profiles'

export const Profiles = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

const ProfilesList = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>
}
const ProfilesName = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>
}
const ProfilesItem = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>
}
const ProfilesTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
const ProfilesUser = ({ children, ...restProps }) => {
 return <User {...restProps}>{children}</User>
}
const ProfilesPicture = ({ src, ...restProps }) => {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading`}
    />
  )
}
Profiles.List = ProfilesList
Profiles.Name = ProfilesName
Profiles.Item = ProfilesItem
Profiles.Title = ProfilesTitle
Profiles.Picture = ProfilesPicture
Profiles.User = ProfilesUser
