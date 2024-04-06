export type EachProps<T> = {
  list: T[]
  render: (item: T, index: number) => React.ReactNode
  keyExtractor?: (item: T, index: number) => React.Key
}
