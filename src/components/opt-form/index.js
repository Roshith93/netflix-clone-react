import { Break, Button, Text, Input, Container } from './styles/opt-form'

export const OptForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}
 const OptFormButton = ({children, ...restProps}) => {
  return <Button {...restProps}>{children}<img src="/images/icons/chevron-right.png" alt="Try Now"/></Button>
 }

 const OptFormInput = ({children, ...restProps}) => {
  return <Input {...restProps}/>
 }

 export const OptFormText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}


OptForm.Button = OptFormButton;
OptForm.Input = OptFormInput;
OptForm.Text = OptFormText;