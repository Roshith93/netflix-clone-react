import { Container, Title, SubTitle } from './styles/Feature'

export const Feature = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

const FeatureSubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

const FeatureTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}

Feature.Title = FeatureTitle
Feature.SubTitle = FeatureSubTitle
