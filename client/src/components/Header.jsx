import { TiArrowBack } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="">
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
