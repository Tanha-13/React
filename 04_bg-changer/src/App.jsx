import { useState } from "react";


function App() {
  let [color, setColor] = useState("");
  console.log(color);
  const bgColor = [
    {
      colorName: 'Red',
      colorCode: 'bg-red-700'
    },
    {
      colorName: 'Green',
      colorCode: 'bg-green-700'
    },
    {
      colorName: 'Blue',
      colorCode: 'bg-blue-700'
    },
    {
      colorName: 'Olive',
      colorCode: 'bg-lime-700'
    },
    {
      colorName: 'Gray',
      colorCode: 'bg-gray-700'
    },
    {
      colorName: 'Yellow',
      colorCode: 'bg-yellow-700'
    },
    {
      colorName: 'Pink',
      colorCode: 'bg-pink-700'
    },
    {
      colorName: 'Purple',
      colorCode: 'bg-purple-600'
    },
    {
      colorName: 'Lavender',
      colorCode: 'bg-violet-400'
    },
    {
      colorName: 'Black',
      colorCode: 'bg-black'
    },
  ];

  return (
    //style={{backgroundColor: color}}
    <div className={`${color} w-full h-screen duration-300`}>
      <div className="flex justify-around items-center shadow-md rounded-xl h-16 w-4/5 m-auto bg-white">
        {bgColor.map((color, index) => (
          <button onClick={() => setColor(`${color.colorCode}`)} key={index} className={`text-white px-6 py-1 rounded-full ${color.colorCode}`}>{color.colorName}</button>
        ))
        }
      </div>
    </div>
  );
}

export default App;
