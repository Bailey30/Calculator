import React from "react"
import { useState } from "react"
import { evaluate, sqrt, square  } from "mathjs"
// const math = create(all, {})

const App = () => {
  const [buttons] = useState(["square", "sqrt", "clear", "back", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", ".", 0, "=", "/"])
  const [output, setOutput] = useState([])
  const [btnDisabled, setBtnDisabled] = useState(false)
  const clickHandler = (index, e) => {
    
    if (e.target.innerHTML === "=" && output) {
      equalsHandler()
    }
    else if ( e.target.innerHTML === "square" ){
      squareHandler()
    } else if (e.target.innerHTML === "sqrt"){
      sqrtHandler()
    } else if ( e.target.innerHTML === "clear"){
      screenClear()
    } else if (e.target.innerHTML === "back"){
      backHandler()
    }
    else {
      setBtnDisabled(false)
      const storedOutput = [...output]
      storedOutput.push(buttons[index])
      setOutput(storedOutput)
    }
  }
  const squareHandler = () => {
    if (output.length >0) {
      const storedOutput = [...output]
      const joinedOutput = storedOutput.join("")
      const answer = square(joinedOutput)
      console.log(answer);
      const strans = answer.toString()
      const splitans = strans.split("")
      setOutput(splitans)
    }
  }
  const sqrtHandler = () => {
    if (output.length >0) {
      const storedOutput = [...output]
      const joinedOutput = storedOutput.join("")
      const answer = sqrt(joinedOutput)
      console.log(answer);
      const strans = answer.toString()
      const splitans = strans.split("")
      setOutput(splitans)
    }
  }
  const screenClear = () => {
    setOutput("")
  }
  const backHandler = () => {

  }
  const equalsHandler = () => {
    if (output.length > 1) {
      const storedOutput = [...output]
      const joinedOutput = storedOutput.join("")
      const answer = evaluate(joinedOutput)
      const strans = answer.toString()
      const splitans = strans.split("")
      setOutput(splitans)
    }
  }


  return (
    <div className="calculator">
      <div className="screen">{output}</div>
      <div className="container">

        {buttons.map((button, index) => {
          return <button disabled={btnDisabled} className="btn" key={index} onClick={(e) => clickHandler(index, e)}>{button}</button>

        })}
        {/* <div className="equals" onClick={equalsHandler}>=</div> */}
      </div>
    </div>
  )
}

// const Button = (clickHandler, props, button) => {
//   return (
//     <div className="btn" onClick={clickHandler}>{button}</div>
//   )
// }

export default App