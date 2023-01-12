import { useState } from "react";
import { IoSend } from "react-icons/io5";

const Login = ({ setUsername }) => {
  const [newUsername, setNewUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUsername.length > 2) {
      setUsername(newUsername);
    }
  };

  return (
    <div className="grid h-full place-content-center gap-10 text-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Login</h1>
        <h2 className="text-subtext0">Set a username</h2>
      </div>
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="rounded-xl px-5 text-base"
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button type="submit" className="rounded-xl">
          <IoSend className="text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default Login;
