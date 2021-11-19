import React from "react"
import { useState } from "react"
import { evaluate, sqrt, square } from "mathjs"


const App = () => {
  const [buttons] = useState(["square", "sqrt", "clear", "back", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", ".", 0, "=", "/"])
  const ops = ["/", "*", "+", "-", "."]
  const [output, setOutput] = useState([]) //JUST USE A STRING INSTEAD OF AN ARRAY NEXT TIME FFS
  const [sum, setSum] = useState([])

  const clickHandler = (index, e, button) => {
    ops.includes(button) && ops.includes(output[output.length - 1]) ?
      console.log("don't do that")
      : e.target.innerHTML === "=" && output ?
        equalsHandler()
        : e.target.innerHTML === "square" ?
          squareHandler()
          : e.target.innerHTML === "sqrt" ?
            sqrtHandler()
            : e.target.innerHTML === "clear" ?
              screenClear()
              : e.target.innerHTML === "back" ?
                backHandler()
                : outputHandler(index)

  }

  const outputHandler = (index) => {
    const storedOutput = [...output]
    storedOutput.push(buttons[index])
    setOutput(storedOutput)

    const storedSum = [...sum]
    storedSum.push(buttons[index])
    setSum(storedSum)
  }

  const backHandler = () => {
    const storedOutput = [...output]
    storedOutput.pop()
    setOutput(storedOutput)

    const storedSum = [...sum]
    storedSum.pop()
    setSum(storedSum)
  }
  const squareHandler = () => {
    if (output.length > 0) {
      const storedOutput = [...output]
      setOutput(square(storedOutput.join("")).toString().split(""))

      const storedSum = [...sum]
      storedSum.push("²")
      setSum(storedSum)
    }

  }
  const sqrtHandler = () => {
    if (output.length > 0) {
      const storedOutput = [...output]
      setOutput(sqrt(storedOutput.join("")).toFixed(2).toString().split(""))

      const storedSum = [...sum]
      storedSum.unshift("√")
      setSum(storedSum)
    }
  }
  const screenClear = () => {
    setOutput("")
    setSum("")
  }

  const equalsHandler = () => {
    if (output.length > 1) {
      const storedOutput = [...output]
      setOutput(evaluate(storedOutput.join("")).toString().split(""))

      const storedSum = [...sum]
      storedSum.push(")")
      storedSum.unshift("(")
      setSum(storedSum)
    }
  }

  return (
    <div className="calculator">
      <div className="screen">{output}<div className="sum">{sum}</div></div>

      <div className="container">

        {buttons.map((button, index) => {
          return <button className="btn" key={index} onClick={(e) => clickHandler(index, e, button)}>{button}</button>

        })}

      </div>
    </div>
  )
}



export default App