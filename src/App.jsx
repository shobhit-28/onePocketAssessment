import { Assessment1 } from "./components/assessment1/assessment1"
import { Assessment2 } from "./components/assessment2/assessment2"

function App() {
  const clickHandler = () => {
    alert(`Hello!`)
  }

  return (
    <div className="App">
      <h1 className="heading">Assessment</h1>
      <hr />
      <Assessment1 label={`Assessment1 Button`} clickHandler={clickHandler}/>
      <hr />
      <Assessment2 />
      <hr />
    </div>
  )
}

export default App
