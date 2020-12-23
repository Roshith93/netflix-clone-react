import { useState, useContext, createContext } from 'react'
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Item,
  Image,
  Meta,
  FeatureText,
  Feature,
  FeatureTitle,
  FeatureClose,
  Content,
  Maturity,
  Entities,
} from './styles/Card'

export const FeatureContext = createContext()

export const Card = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false)
  const [itemFeature, setItemFeature] = useState({})

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  )
}
const CardGroup = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>
}
const CardTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
const CardSubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
const CardText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
const CardItem = ({ item, children, ...restProps }) => {
  const { setItemFeature, setShowFeature } = useContext(FeatureContext)
  return (
    <Item
      onClick={() => {
        setItemFeature(item)
        setShowFeature(true)
      }}
      {...restProps}
    >
      {children}
    </Item>
  )
}

const CardImage = ({ children, ...restProps }) => {
  return <Image {...restProps} />
}
const CardMeta = ({ children, ...restProps }) => {
  return <Meta {...restProps}>{children}</Meta>
}
const CardFeatureText = ({ children, ...restProps }) => {
  return <FeatureText {...restProps}>{children}</FeatureText>
}
const CardFeature = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>
}
const CardFeatureTitle = ({ children, ...restProps }) => {
  return <FeatureTitle {...restProps}>{children}</FeatureTitle>
}
const CardFeatureClose = ({ children, ...restProps }) => {
  return <FeatureClose {...restProps}>{children}</FeatureClose>
}
const CardContent = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>
}
const CardMaturity = ({ children, ...restProps }) => {
  return <Maturity {...restProps}>{children}</Maturity>
}
const CardEntities = ({ children, ...restProps }) => {
  return <Entities {...restProps}>{children}</Entities>
}

Card.Group = CardGroup
Card.SubTitle = CardSubTitle
Card.Title = CardTitle
Card.Text = CardText
Card.Item = CardItem
Card.Image = CardImage
Card.Meta = CardMeta
Card.FeatureText = CardFeatureText
Card.Feature = CardFeature
Card.FeatureTitle = CardFeatureTitle
Card.FeatureClose = CardFeatureClose
Card.Content = CardContent
Card.Maturity = CardMaturity
Card.Entities = CardEntities
