import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <h1 className="text-5xl text-center bg-emerald-500 p-4">React Router</h1>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>

    </>
  );
}

export default App;
