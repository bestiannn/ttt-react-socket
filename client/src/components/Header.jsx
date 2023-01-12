import { TiArrowBack } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";

const Header = ({ gameInfo, setGameInfo }) => {
  const handleBack = () => {
    setGameInfo((prev) => ({ ...prev, active: false }));
  };

  return (
    <div className="flex justify-between">
      <div onClick={handleBack} className="cursor-pointer">
        <TiArrowBack />
      </div>
      <div className="">X Turn</div>
      <div className="flex gap-1">
        <AiOutlineClose /> <BsCircle />
      </div>
    </div>
  );
};

export default Header;
