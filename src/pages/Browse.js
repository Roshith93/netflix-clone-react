import { UseContent } from '../hooks/UseContent'
import { SelectionTitle } from '../utils/SelectionTitle'
import { BrowseContainer } from '../containers'

export const Browse = () => {
  const { series } = UseContent('series')
  const { films } = UseContent('films')
  const slides = SelectionTitle({ series, films })
  return <BrowseContainer slides={slides} />
}