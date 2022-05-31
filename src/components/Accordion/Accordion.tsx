type AccordionPropsType = {
  title: string
  collapsed: boolean
  onClick: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle
        title={props.title}
        onClick={props.onClick}
        collapsed={props.collapsed}
      />
      {!props.collapsed && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClick: (collapsed: boolean) => void
  collapsed: boolean
}
function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h1
      onClick={() => {
        props.onClick(!props.collapsed)
      }}
    >
      {props.title}
    </h1>
  )
}
function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
