import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Browse,Home, Signup, Signin} from './pages'
import * as ROUTES from './constants'

const App = () => (
  <>
   <Router>
     <Route exact path={ROUTES.HOME} >
       <Home/>
     </Route>
     <Route exact path={ROUTES.SIGNIN} >
       <Signin/>
     </Route>
     <Route exact path={ROUTES.SIGNUP} >
       <Signup/>
     </Route>
     <Route exact path={ROUTES.BROWSE} >
       <Browse/>
     </Route>
   </Router>
  </>
)

export default App
