import { useState } from "react"


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  return (
    <>
      <h1 className="text-5xl text-center font-semibold mt-4">Password Generator</h1>
      {length}
    </>
  )
}

export default App
