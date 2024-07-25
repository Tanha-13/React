import { useCallback, useState } from "react"


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useCallBack(function, [dependencies]) - cache the function between re-renders.
  const passwordGenerator = useCallback(() => {


  }, [length,numberAllowed,charAllowed,setPassword])
  return (
    <>
      <h1 className="text-5xl text-center font-semibold mt-4">Password Generator</h1>
    </>
  )
}

export default App
