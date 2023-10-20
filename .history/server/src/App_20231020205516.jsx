import { useCallback, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const setAvatarLogo = useCallback(async () => {
    try {
      const data = new FormData();
      data.append("avatar", img);
      await axios
        .post("/api/upload", data, {
          header: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => setAvatar(res.data.path));
    } catch (error) {
      console.log(error);
    }
  }, [img]);

  return (
    <div className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-400 h-[100vh] flex flex-col gap-[60px] justify-center items-center">
      <div className=" w-[250px] h-[250px] rounded-full bg-slate-500 flex items-center justify-center">
        <img className=" object-contain" src={avatar} alt="Account Image" />
      </div>
      <form className="flex flex-col">
        <input onChange={(e) => setImg(e.target.files[0])} type="file" />
        <button
          onClick={setAvatarLogo}
          className=" bg-blue-300 hover:bg-blue-600 text-white p-4 m-5"
        >
          Change Photo
        </button>
      </form>
    </div>
  );
}
export default App;
