// user logins redirect to browse pages
//check user is logged in
//protected routes, ie to protect browse page
import { Route, Redirect } from 'react-router-dom'
import * as ROUTES from '../constants'

export const IsUserLoggedIn = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children
        }
        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />
        }
        return null
      }}
    />
  )
}

export const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children
        }
        if (!user) {
          return <Redirect
            to={{ pathname: ROUTES.SIGNIN, state: { from: location } }}
          />
        }
      }}
    />
  )
}
