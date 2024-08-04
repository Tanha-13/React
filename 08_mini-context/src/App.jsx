import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import UserContextProvider from "./context/UserContextProvider";
// import userContext from "./context/UserContext";

function App() {
  return (
    // <userContext.Provider value = {{}}>

    // </userContext.Provider>

    // approach 2
    <UserContextProvider>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
