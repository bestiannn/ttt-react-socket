import { useState } from "react";
import Game from "./components/Game";
import Lobby from "./components/Lobby";
import Login from "./components/Login";

const App = () => {
  const [username, setUsername] = useState("");
  const [gameInfo, setGameInfo] = useState({
    active: false,
    gameID: "",
  });

  return (
    <div className="mocha min-h-screen bg-base text-center text-text">
      <div className="container mx-auto h-screen px-5 py-5">
        {!username && !gameInfo.active && <Login setUsername={setUsername} />}

        {username && !gameInfo.active && (
          <Lobby username={username} setGameInfo={setGameInfo} />
        )}

        {username && gameInfo.active && (
          <Game gameInfo={gameInfo} setGameInfo={setGameInfo} />
        )}
      </div>
    </div>
  );
};

export default App;
