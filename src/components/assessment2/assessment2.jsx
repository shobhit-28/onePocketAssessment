import { useState } from "react"

import './assessment2.css'

export const Assessment2 = () => {
    const [num, setNum] = useState(0)

  return (
    <div className="assessment-2">
        <button className="decrement" onClick={() => setNum(num - 1)}>-</button>
        <p className="num">{num}</p>
        <button className="increment" onClick={() => setNum(num + 1)}>+</button>
    </div>
  )
}
