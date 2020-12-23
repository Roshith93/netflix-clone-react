import { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Overlay, Inner, Close, Button } from './styles/Player'

export const PlayerContext = createContext()

export const Player = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

const PlayerVideo = ({ src, ...restProps }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid='player'>
          <Inner>
            <video id='netflix-player' controls>
              <source src={src} type='video/mp4' />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null
}

const PlayerButton = ({ ...restProps }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)
  return (
    <Button
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
      {...restProps}
    >
      Play
    </Button>
  )
}
Player.Video = PlayerVideo
Player.Button = PlayerButton
