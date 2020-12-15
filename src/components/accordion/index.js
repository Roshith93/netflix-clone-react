import { useState, useContext, createContext } from 'react'
import {
  Body,
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
} from './styles/accordion'

const ToggleContext = createContext()

export const Accordion = ({ children, ...restProps }) => {
  return (
    <Container>
      <Inner {...restProps}>{children}</Inner>s
    </Container>
  )
}

const AccordionTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
const AccordionFrame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>
}

const AccordionItem = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false)
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}
const AccordionHeader = ({ children, ...restProps }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)
  return (
    <Header
      {...restProps}
      onClick={() => setToggleShow(!toggleShow)}
    >
      {children}
      {toggleShow ? (
        <img src='/images/icons/close-slim.png' alt='close' />
      ) : (
        <img src='/images/icons/add.png' alt='open' />
      )}
    </Header>
  )
}

const AccordionBody = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext)
  return toggleShow ? <Body className={toggleShow ? 'open': 'close'} {...restProps}>{children}</Body> : null
}

Accordion.Frame = AccordionFrame
Accordion.Item = AccordionItem
Accordion.Title = AccordionTitle
Accordion.Header = AccordionHeader
Accordion.Body = AccordionBody
