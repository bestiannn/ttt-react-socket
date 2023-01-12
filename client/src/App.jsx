import { useState } from "react";
import Lobby from "./components/Lobby";
import Login from "./components/Login";

const App = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="mocha min-h-screen bg-base text-text text-center">
      <div className="container mx-auto h-screen px-5 py-5">
        {username ? (
          <Lobby username={username} />
        ) : (
          <Login setUsername={setUsername} />
        )}
      </div>
    </div>
  );
};

export default App;
