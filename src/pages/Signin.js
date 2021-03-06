import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer, FooterContainer } from '../containers'
import { Form } from '../components'
import * as ROUTES from '../constants'
import { FirebaseContext } from '../context/firebase'

export const Signin = () => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = password === '' || emailAddress === ''
  const handleSignIn = (event) => {
    event.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE)
      })
      .catch((error) => {
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      })
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder='Password'
              value={password}
              autoComplete='off'
              type='password'
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to={ROUTES.SIGNUP}>Sign Up</Form.Link>
          </Form.Text>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
