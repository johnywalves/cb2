import { z } from "zod"
export const COMP_NAME = "Introduction"

export const CompositionProps = z.object({
  title: z.string(),
})

export const defaultIntroductionProps: z.infer<typeof CompositionProps> = {
  title: "Next.js and Remotion",
}

export const VIDEO_FPS = 30
export const VIDEO_WIDTH = 1280
export const VIDEO_HEIGHT = 720
export const DURATION_IN_FRAMES = 5.5 * VIDEO_FPS
