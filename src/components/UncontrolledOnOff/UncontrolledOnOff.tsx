import { useState } from 'react'

type OnOffPropsType = {
  on: boolean
}

export function UncontrolledOnOff() {
  let [on, setOn] = useState(true)
  const onStyle = {
    width: '20px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    backgroundColor: on ? 'green' : 'white',
    padding: '2px',
    marginLeft: '2px',
  }
  const offStyle = {
    width: '20px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    backgroundColor: on ? 'white' : 'red',
    padding: '2px',
    marginLeft: '2px',
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50px',
    border: '1px solid black',
    display: 'inline-block',
    backgroundColor: on ? 'green' : 'red',
    padding: '2px',
    marginLeft: '2px',
  }
  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          setOn(true)
        }}
      >
        on
      </div>
      <div
        style={offStyle}
        onClick={() => {
          setOn(false)
        }}
      >
        off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  )
}
