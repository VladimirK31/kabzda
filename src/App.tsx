import './App.css'
import { Rating, RatingValueType } from './components/Rating/Rating'
import { Accordion } from './components/Accordion/Accordion'
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating'
import { useState } from 'react'
import { OnOff } from './components/OnOff/OnOff'
import { ItemsType, Select } from './components/Select/Select'
import { Clock } from './components/Clock/Clock'

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [on, setOn] = useState<boolean>(true)
  let [items, setItems] = useState<ItemsType[]>([
    { id: 1, title: 'Vovka' },
    { id: 2, title: 'Sashka' },
    { id: 3, title: 'Ben' },
  ])

  return (
    <div className="App">
      <Clock />
      <OnOff on={on} onClick={setOn} />
      <Accordion
        title={'Menu'}
        collapsed={accordionCollapsed}
        onChange={setAccordionCollapsed}
        items={[
          { value: 1, title: 'Vovka' },
          { value: 2, title: 'Sashka' },
          { value: 3, title: 'Ben' },
        ]}
        onClick={function (value: any): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Select items={items} value={''} />
      <UncontrolledOnOff />
      <UncontrolledAccordion />
      <UncontrolledRating />
    </div>
  )
}

export default App
