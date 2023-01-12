import Header from "./Header";
import Score from "./Score";
import Table from "./Table";

const Game = ({ gameInfo, setGameInfo }) => {
  return (
    <div className="flex h-full flex-col gap-10">
      <Header gameInfo={gameInfo} setGameInfo={setGameInfo} />
      <Table />
      <Score />
    </div>
  );
};

export default Game;
