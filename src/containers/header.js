import { Header } from '../components'
import * as ROUTES from '../constants'
import logo from '../netflix_logo.svg'

export const HeaderContainer = ({children}) => {
  return (
    <Header>
      {/* <Header.Frame> */}
        <Header.Logo to={ROUTES.HOME} alt="netflix" src={logo}/>
        <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
      {/* </Header.Frame> */}
      {children}
    </Header>
  )
}
