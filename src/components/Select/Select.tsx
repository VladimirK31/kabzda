export type ItemsType = {
  title: string
  id: any
}
type SelectPropsType = {
  items: ItemsType[]
  value: any
}
export function Select(props: SelectPropsType) {
  const selectItem = props.items.find((el) => el.title === props.value)
  return (
    <div>
      <h3>{selectItem && selectItem.title}</h3>
      {props.items.map((el) => {
        return <div>{el.title}</div>
      })}
    </div>
  )
}
