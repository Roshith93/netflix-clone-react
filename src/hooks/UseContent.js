import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

export const UseContent = (target) => {
  const [content, setContent] = useState([])
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }))
        setContent(allContent)
      }).catch(err=>console.log(err))
  }, [])
  return {[target]: content}
}