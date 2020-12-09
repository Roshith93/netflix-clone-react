import {
  Inner,
  Container,
  Title,
  SubTitle,
  Pane,
  Image,
  Item,
} from './styles/jumbotron'

export const Jumbotron = ({ direction = 'row', children, ...restProps }) => (
  <Item {...restProps}>
    <Inner direction={direction}>{children}</Inner>
  </Item>
)

const JumbotronContainer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}
const JumbotronTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
const JumbotronSubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
const JumbotronPane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>
}
const JumbotronImage = ({ ...restProps }) => {
  return <Image {...restProps} />
}
Jumbotron.Container = JumbotronContainer
Jumbotron.Title = JumbotronTitle
Jumbotron.SubTitle = JumbotronSubTitle
Jumbotron.Pane = JumbotronPane
Jumbotron.Image = JumbotronImage
