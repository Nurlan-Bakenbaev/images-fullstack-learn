import { useCallback, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const setAvatar = useCallback(async () => {
    try {
      const data = new FormData();
      data.append("avatar",img);
      await
    } catch (error) {
      console.log(error);
    }
  });
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  return (
    <div className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-400 h-[100vh] flex flex-col gap-[60px] justify-center items-center">
      <div className=" w-[250px] h-[250px] rounded-full bg-slate-500 flex items-center justify-center">
        <img className=" object-contain" src={avatar} alt="Account Image" />
      </div>
      <form className="flex flex-col">
        <input onChange={(e) => setImg(e.target.files[0])} type="file" />
        <button onClick={setAvatar} className=" bg-blue-300 text-white p-4 m-5">
          Change Photo
        </button>
      </form>
    </div>
  );
}
export default App;
