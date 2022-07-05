import react, { useEffect, useState } from 'react'

const numberWithZero = (num: number) => {
  return num < 10 ? '0' + num : num
}

export const Clock = () => {
  let [date, setDate] = useState(new Date())

  const intervalID: any = useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalID)
    }
  }, [])

  return (
    <>
      {numberWithZero(date.getHours())}:{numberWithZero(date.getMinutes())}:
      {numberWithZero(date.getSeconds())}
    </>
  )
}
