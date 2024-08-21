import { useEffect, useState } from "react";
import Card from "./components/Card";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  const [theme, setTheme] = useState("light");

  const lightTheme = () => {
    setTheme("light");
  }
  const darkTheme = () => {
    setTheme("dark");
  }
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("dark", "light");
    html.classList.add(theme)
  },[theme])
  return (
    <>
      <div className="dark:bg-gray-800 dark:border-white min-h-screen">
        <div className="flex items-center justify-around ">
          <h1 className="text-2xl md:text-4xl font-medium text-center my-10 dark:text-white">
            Theme Switcher
          </h1>
          <ToggleBtn theme={theme} darkTheme={darkTheme} lightTheme={lightTheme} />
        </div>
        <div className="flex flex-col p-1 gap-3 items-center justify-around lg:flex-row flex-wrap">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
}

export default App;
