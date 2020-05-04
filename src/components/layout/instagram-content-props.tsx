export type InstagramContentProps = {
  caption: string
  id: string
  likes: number
  comments: number
  original: string
  thumbnails: ThumbnailProps[]
}

type ThumbnailProps = {
  config_height: number
  config_width: number
  src: string
}
