import {
  Container,
  Row,
  Title,
  Column,
  Link,
  Text,
  Break,
} from './styles/footer'
export const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}
const FooterRow = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>
}
const FooterTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
const FooterColumn = ({ children, ...restProps }) => {
  return <Column {...restProps}>{children}</Column>
}
const FooterLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>
}
const FooterText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
const FooterBreak = ({ children, ...restProps }) => {
  return <Break {...restProps}>{children}</Break>
}

Footer.Row = FooterRow
Footer.Title = FooterTitle
Footer.Column = FooterColumn
Footer.Link = FooterLink
Footer.Text = FooterText
Footer.Break = FooterBreak
