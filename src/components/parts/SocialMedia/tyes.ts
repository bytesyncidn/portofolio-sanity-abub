export type Rounded = 'all' | 'right'

export type Position = 'center' | 'left'

export type SocialMediaProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * @default right
   */
  rounded?: Rounded
  /**
   * @default left
   */
  position?: Position
}
