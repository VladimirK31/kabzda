type ItemsType = {
  title: string
  value: any
}

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onChange: (collapsed: boolean) => void
  items: ItemsType[]
  onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle
        title={props.title}
        onChange={props.onChange}
        collapsed={props.collapsed}
      />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onChange: (collapsed: boolean) => void
  collapsed: boolean
}
function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h1
      onClick={() => {
        props.onChange(!props.collapsed)
      }}
    >
      {props.title}
    </h1>
  )
}

type AccordionBodyPropsType = {
  items: ItemsType[]
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((el, index) => (
        <li
          onClick={() => {
            props.onClick(el.value)
          }}
          key={index}
        >
          {el.title}
        </li>
      ))}
    </ul>
  )
}
