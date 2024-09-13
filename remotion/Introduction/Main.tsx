import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"

import React from "react"

import CurlyBracketTwo from "../CurlyBracketTwo"
import { VIDEO_WIDTH } from "../../types/constants"

const container: React.CSSProperties = {
  backgroundColor: "white",
  display: "block",
}

export const Main = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const framesDelay = 0.5 * fps
  const durationInFrames = 5 * fps
  const propsCharacter = {
    width: 350,
    height: 350,
    startLeft: -700,
  }

  const progress = spring({
    fps,
    frame,
    delay: framesDelay,
    durationInFrames,
  })

  const leftPosition = interpolate(
    progress,
    [0, 1],
    [propsCharacter.startLeft, VIDEO_WIDTH - propsCharacter.width]
  )

  return (
    <AbsoluteFill style={container}>
      <Sequence durationInFrames={framesDelay}>
        <AbsoluteFill />
      </Sequence>
      <Sequence from={framesDelay} durationInFrames={durationInFrames}>
        <CurlyBracketTwo
          {...propsCharacter}
          left={leftPosition}
          style={{
            position: "absolute",
            top: "65%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Sequence>
    </AbsoluteFill>
  )
}
