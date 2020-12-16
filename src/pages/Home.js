import {
  JumbotronContainer,
  FaqsContainer,
  FooterContainer,
  HeaderContainer,
} from '../containers'
import { OptForm, Feature } from '../components'

export const Home = () => (
  <>
    <HeaderContainer>
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more</Feature.Title>
        <Feature.SubTitle>Watch anywhere. cancel at any time.</Feature.SubTitle>
      <OptForm>
        <OptForm.Input placeholder='Email Address' />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>Ready to watch? Enter your Email </OptForm.Text>
      </OptForm>
      </Feature>
    </HeaderContainer>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
  </>
)
