import {
  Base,
  Container,
  Error,
  Title,
  Text,
  Textarea,
  Link,
  Input,
  Submit,
} from './styles/Form'

export const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

const FormError = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>
}
const FormTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
const FormText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
const FormBase = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>
}
const FormLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>
}
const FormInput = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>
}
const FormSubmit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>
}
Form.Error = FormError
Form.Title = FormTitle
Form.Text = FormText
Form.Base = FormBase
Form.Link = FormLink
Form.Input = FormInput
Form.Submit = FormSubmit
