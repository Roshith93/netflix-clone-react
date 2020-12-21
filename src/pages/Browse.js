import {UseContent} from '../hooks/UseContent'

export const Browse = () => {
 const {series} = UseContent('series')
 const {films} = UseContent('films')
 return(
  <p>from Browse </p>
 )
}