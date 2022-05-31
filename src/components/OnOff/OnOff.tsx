type OnOffPropsType = {
  on: boolean
  onClick: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {
  const onStyle = {
    width: '20px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    backgroundColor: props.on ? 'green' : 'white',
    padding: '2px',
    marginLeft: '2px',
  }
  const offStyle = {
    width: '20px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    backgroundColor: props.on ? 'white' : 'red',
    padding: '2px',
    marginLeft: '2px',
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50px',
    border: '1px solid black',
    display: 'inline-block',
    backgroundColor: props.on ? 'green' : 'red',
    padding: '2px',
    marginLeft: '2px',
  }
  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          props.onClick(!props.on)
        }}
      >
        on
      </div>
      <div
        style={offStyle}
        onClick={() => {
          props.onClick(!props.on)
        }}
      >
        off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  )
}
