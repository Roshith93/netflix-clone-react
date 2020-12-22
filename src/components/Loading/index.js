import { LockBody, ReleaseBody, Spinner, Picture } from './styles/Loading'

export const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid='loading-picture' />
    </Spinner>
  )
}

const LoadingReleaseBody = () => {
  return <ReleaseBody />
}

Loading.ReleaseBody = LoadingReleaseBody
