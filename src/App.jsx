import { Assessment1 } from "./components/assessment1/assessment1"

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
    </div>
  )
}

export default App
