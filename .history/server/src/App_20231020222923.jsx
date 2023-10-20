import { useCallback, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const setAvatarLogo = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const data = new FormData();
        data.append("avatar", img);
        const response = await axios.post(
          "http://localhost:4000/api/upload",
          data,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
          }
        );

        // Assuming the response.data is a Buffer
        const blob = new Blob([response.data.buffer]);
        const imgUrl = URL.createObjectURL(blob);

        setAvatar(imgUrl);
      } catch (error) {
        console.log(error);
      }
    },
    [img]
  );

  return (
    <div className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-400 h-[100vh] flex flex-col gap-[60px] justify-center items-center">
      <div className="w-[250px] h-[250px] rounded-full bg-slate-500 flex items-center justify-center">
        <img className="object-contain z-10" src={avatar} alt="Account Image" />
      </div>
      <form onSubmit={setAvatarLogo} className="flex flex-col">
        <input
          placeholder={img ? "File Selected" : "Choose "}
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
        />
        <button className="bg-blue-300 hover:bg-blue-600 text-white p-4 m-5">
          Change Photo
        </button>
      </form>
    </div>
  );
}

export default App;
