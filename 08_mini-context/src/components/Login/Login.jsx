import { useState, useContext } from "react";
import userContext from "../../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    setPassword("");
    setUsername("");
    
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl my-7">Login</h2>
        <input
          className="border px-3 py-2 rounded-sm"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          type="password"
          className="border px-3 py-2 rounded-sm my-3"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="border-none bg-red-800 px-10 py-2 text-slate-200 rounded-full" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;
