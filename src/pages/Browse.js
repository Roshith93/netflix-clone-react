import {UseContent} from '../hooks/UseContent'
import {SelectionTitle} from '../utils/SelectionTitle'
export const Browse = () => {
 const {series} = UseContent('series')
 const {films} = UseContent('films')
 const slides = SelectionTitle({series, films})
 console.log(slides)
 return(
  <p>from Browse </p>
 )
}