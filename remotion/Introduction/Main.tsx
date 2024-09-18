import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"

import React, { CSSProperties } from "react"

import CurlyBracketTwo from "../CurlyBracketTwo"
import { VIDEO_WIDTH } from "../../types/constants"

const styleContainer: React.CSSProperties = {
  backgroundColor: "white",
  display: "block",
}

const styleGround: React.CSSProperties = {
  position: "absolute",
  top: "80%",
  width: "100%",
  height: "20%",
  background: "radial-gradient(circle, #dfdfdf80 50%, #ffffff80 100%)",
}

export const Main = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const framesDelay = 0.5 * fps
  const durationInFrames = 5 * fps

  const propsCharacter = {
    width: 400,
    height: 400,
    startLeft: -800,
    finishLeft: VIDEO_WIDTH - 400 * 1.12,
  }

  const progress = spring({
    fps,
    frame,
    config: {
      stiffness: 200,
    },
    delay: framesDelay,
    durationInFrames,
  })

  const leftPosition = interpolate(
    progress,
    [0, 1],
    [propsCharacter.startLeft, propsCharacter.finishLeft]
  )

  const prevProgress = spring({
    fps,
    frame: frame - 1,
    config: {
      stiffness: 200,
    },
    delay: framesDelay,
    durationInFrames,
  })

  const prevLeft = interpolate(
    prevProgress,
    [0, 1],
    [propsCharacter.startLeft, propsCharacter.finishLeft]
  )

  const speed = prevLeft - leftPosition

  const cb2Style: CSSProperties = {
    position: "absolute",
    top: "60%",
    transform: "translate(-50%, -50%)",
  }

  return (
    <AbsoluteFill style={styleContainer}>
      <Sequence durationInFrames={framesDelay}>
        <AbsoluteFill />
      </Sequence>

      <Sequence from={framesDelay} durationInFrames={durationInFrames}>
        <div style={styleGround} />
        <CurlyBracketTwo
          {...propsCharacter}
          left={leftPosition}
          speed={speed}
          style={cb2Style}
        />
      </Sequence>
    </AbsoluteFill>
  )
}
