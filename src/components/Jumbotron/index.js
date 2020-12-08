import { Inner, Container, Title, SubTitle, Pane, Image } from './styles/jumbotron'

export const Jumbotron = ({ direction = 'row', children, ...restProps }) => <Inner direction={direction}>{children}</Inner>

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
const JumbotronImage = ({ children, ...restProps }) => {
 return <Image {...restProps}>{children}</Image>
}
Jumbotron.Container = JumbotronContainer
Jumbotron.Title = JumbotronTitle
Jumbotron.SubTitle = JumbotronSubTitle
Jumbotron.Pane = JumbotronPane
Jumbotron.Image = JumbotronImage