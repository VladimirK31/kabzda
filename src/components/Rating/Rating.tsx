export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  /**
   * Elements
   */
  value: RatingValueType
  onClick: (value: RatingValueType) => void
  /**
   * color for star
   */
  // color?: string
}

export function Rating(props: RatingPropsType) {
  return (
    <div>
      <Star
        selected={props.value > 0}
        onClick={props.onClick}
        value={1}
        // color={props.color}
      />
      <Star
        selected={props.value > 1}
        onClick={props.onClick}
        value={2}
        // color={props.color}
      />
      <Star
        selected={props.value > 2}
        onClick={props.onClick}
        value={3}
        // color={props.color}
      />
      <Star
        selected={props.value > 3}
        onClick={props.onClick}
        value={4}
        // color={props.color}
      />
      <Star
        selected={props.value > 4}
        onClick={props.onClick}
        value={5}
        // color={props.color}
      />
    </div>
  )
}

export type StarPropsType = {
  selected: boolean
  onClick: (value: RatingValueType) => void
  value: RatingValueType
  color?: string
}
function Star(props: StarPropsType) {
  return (
    <span
      onClick={() => {
        props.onClick(props.value)
      }}
    >
      {props.selected ? <b style={{ color: 'red' }}> star</b> : ' star'}
    </span>
  )
}
