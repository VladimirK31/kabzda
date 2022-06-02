import { ComponentStory, ComponentMeta } from '@storybook/react'
import { getValue } from '@testing-library/user-event/dist/utils'
import { ChangeEvent, useRef, useState } from 'react'

export default {
  title: 'input',
}

const Input1 = () => {
  const [value, setValue] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)
  }

  return (
    <>
      <input onChange={onChange} />-{value}
    </>
  )
}
export const UncontrolledInput = Input1.bind({})

const Input2 = () => {
  const [value, setValue] = useState('')
  const refValue = useRef<HTMLInputElement>(null)
  const save = () => {
    const el = refValue.current as HTMLInputElement
    setValue(el.value)
  }
  return (
    <>
      <input ref={refValue} />
      <button onClick={save}>save</button>
      -actual value:{value}
    </>
  )
}
export const GetValueOfUncontrolledInput = Input2.bind({})

const Input3 = () => {
  const [parentValue, setParentValue] = useState('')
  return (
    <input
      value={parentValue}
      onChange={(e) => {
        setParentValue(e.currentTarget.value)
      }}
    />
  )
}
export const ControlledInput = Input3.bind({})

const Input4 = () => {
  const [parentValue, setParentValue] = useState(true)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }

  return <input type={'checkbox'} checked={parentValue} onChange={onChange} />
}
export const CheckBox = Input4.bind({})

const Input5 = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined)
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return (
    <select onChange={onChange} value={parentValue}>
      <option>none</option>
      <option value={'1'}>Minsk</option>
      <option value={'2'}>Moscow</option>
      <option value={'3'}>Kiev</option>
    </select>
  )
}
export const Select = Input5.bind({})
