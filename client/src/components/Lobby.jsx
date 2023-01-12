import React from "react";
import { IoSend } from "react-icons/io5";

const Lobby = ({ username }) => {
  return (
    <div className="grid h-full place-content-center gap-10">
      <h2 className="text-xl font-bold">Welcome {username}</h2>

      <div className="flex justify-between">
        <button className="rounded-xl border px-5 py-2 font-bold">
          VS CPU
        </button>
        <button className="rounded-xl border px-5 py-2 font-bold">
          VS Friend
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <span>Join a game</span>
        <form className="flex gap-3">
          <input type="text" className="rounded-xl px-5 text-base" />
          <button type="submit" className="rounded-xl">
            <IoSend className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lobby;
