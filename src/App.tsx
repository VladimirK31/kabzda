import './App.css'
import { Rating, RatingValueType } from './components/Rating/Rating'
import { Accordion } from './components/Accordion/Accordion'
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating'
import { useState } from 'react'
import { OnOff } from './components/OnOff/OnOff'

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [on, setOn] = useState<boolean>(true)
  return (
    <div className="App">
      This is APP component
      <OnOff on={on} onClick={setOn} />
      <Accordion
        title={'Menu'}
        collapsed={accordionCollapsed}
        onClick={setAccordionCollapsed}
      />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolledOnOff />
      <UncontrolledAccordion />
      <UncontrolledRating />
    </div>
  )
}

export default App
