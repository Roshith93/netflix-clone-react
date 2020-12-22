import { useContext, useState, useEffect } from 'react'
import { SelectProfileContainer } from './Profiles'
import { FirebaseContext } from '../context/firebase'
import { Loading ,Header} from '../components'

export const BrowseContainer = ({ slides }) => {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}
  useEffect(() => {
    console.log('profile', profile)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])
  return profile.displayName ? (
   <>{ loading ? (
      <Loading src={user.photoURL} />
    ) : <Loading.ReleaseBody />}
    <Header src="joker">
      <p>Hello</p>
    </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}