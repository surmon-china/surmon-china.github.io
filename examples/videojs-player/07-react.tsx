// @ts-nocheck
import React, { useRef, useState } from 'react'
import { VideoPlayer, VideoPlayerProps, VideoPlayerState } from '@videojs-player/react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import style from './07-react.module.scss'

// example site dedicated
import { transformReactComponentToVue } from '@/transforms/component'

type VideoJsPlayer = ReturnType<typeof videojs>

const ReactBasicPlayer = () => {
  const playerRef = useRef()
  const [playerState, setPlayerState] = useState()
  const [config] = useState(() => ({
    src: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: '/images/poster/oceans.png',
    playbackRates: [0.75, 1, 1.5, 2, 3],
    volume: 0.6
  }))

  const handleMounted: VideoPlayerProps['onMounted'] = (payload) => {
    console.log('React player mounted', payload)
    playerRef.current = payload.player
    setPlayerState(payload.state)
  }

  const handleStateChange = (state: VideoPlayerState) => {
    setPlayerState(state)
  }

  return (
    <div className={style.reactPlayerExample}>
      {playerState && (
        <div className={style.stateView}>
          <span className={style.item}>playing: {String(playerState.playing)}</span>
          <span className={style.item}>duration: {playerState.duration.toFixed(2)}</span>
          <span className={style.item}>currentTime: {playerState.currentTime.toFixed(2)}</span>
          <span className={style.item}>volume: {playerState.volume}</span>
          <span className={style.item}>muted: {String(playerState.muted)}</span>
          <span className={style.item}>playbackRate: {playerState.playbackRate}</span>
          <span className={style.item}>isFullscreen: {String(playerState.isFullscreen)}</span>
          <span className={style.item}>isPIP: {String(playerState.isInPictureInPicture)}</span>
        </div>
      )}
      <VideoPlayer
        className={`video-player vjs-big-play-centered ${style.videoPlayer} ${
          playerState?.playing ? 'playing' : ''
        }`}
        height={320}
        crossorigin="anonymous"
        playsinline
        controls
        src={config.src}
        poster={config.poster}
        volume={config.volume}
        playbackRates={config.playbackRates}
        onMounted={handleMounted}
        onStateChange={handleStateChange}
      >
        {({ player, state }: { player: VideoJsPlayer; state: VideoPlayerState }) => (
          <div className={style.customControls}>
            <span className={style.item}>🔊 {state.volume}</span>
            <button className={style.item} onClick={() => (state.playing ? player.pause() : player.play())}>
              {state.playing ? '⏸ Pause' : '▶️ Play'}
            </button>
            <button className={style.item} onClick={() => player.muted(!state.muted)}>
              {state.muted ? '🔇 Unmuted' : '🔈 Mute'}
            </button>
            <progress
              className={style.item}
              max={isNaN(state.duration) ? 0 : state.duration}
              value={state.currentTime}
            ></progress>
            <select
              className={style.item}
              value={state.playbackRate}
              onChange={(event) => {
                player.playbackRate(Number((event.target as HTMLSelectElement).value))
              }}
            >
              {state.playbackRates.map((item) => (
                <option key={item} value={item}>
                  {item}x
                </option>
              ))}
            </select>
            <button
              className={style.item}
              onClick={() => {
                state.isInPictureInPicture ? player.exitPictureInPicture() : player.requestPictureInPicture()
              }}
            >
              📺 {state.isInPictureInPicture ? 'Exit' : 'Enter'} PIP
            </button>
            <button
              className={style.item}
              onClick={() => {
                state.isFullscreen ? player.exitFullscreen() : player.requestFullscreen()
              }}
            >
              {state.isFullscreen ? '🖥 Exit' : '💻 Enter'} FS
            </button>
          </div>
        )}
      </VideoPlayer>
    </div>
  )
}

// example site dedicated
export default transformReactComponentToVue({
  name: 'react-player-example',
  title: 'Example player (React)',
  url: import.meta.url,
  component: ReactBasicPlayer
})
