import Card from "./components/Card";


function App() {
  // let myObj = {
  //   userName: "Nusrat",
  //   age: 24
  // } 
  // let newArr = [1,2,3,4];
  const myName = 'Hemloc'
  return (
    <>
      <div className="flex justify-center">
        <h1 className="bg-green-400 text-5xl p-4 rounded-md w-96 text-center">
          Tailwind Test
        </h1>
      </div>
      <Card userName = {myName} btnText = 'click me'></Card>
      <Card userName = "Hitesh"></Card>
    </>
  );
}

export default App;
