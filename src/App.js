import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Browse, Home, Signup, Signin } from './pages'
import * as ROUTES from './constants'
import { IsUserLoggedIn, ProtectedRoute } from './helpers/routes'
import { UseAuthListener } from './hooks/UseAuthListener'

const App = () => {
  const { user } = UseAuthListener()
  console.log(user)
  return (
    <>
      <Router>
        <Switch>
          <IsUserLoggedIn
            path={ROUTES.SIGNIN}
            user={user}
            loggedInPath={ROUTES.BROWSE}
          >
            <Signin />
          </IsUserLoggedIn>
          <IsUserLoggedIn
            path={ROUTES.SIGNUP}
            user={user}
            loggedInPath={ROUTES.BROWSE}
          >
            <Signup />
          </IsUserLoggedIn>
          <ProtectedRoute path={ROUTES.HOME} user={user}>
            <Browse />
          </ProtectedRoute>
          <IsUserLoggedIn path={ROUTES.HOME} loggedInPath={ROUTES.BROWSE}>
            <Home />
          </IsUserLoggedIn>
        </Switch>
      </Router>
    </>
  )
}

export default App
