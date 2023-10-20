import { useCallback, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const setAvatarLogo = useCallback(
    async (e) => {
      e.preventDefault();
      console.log("Button clicked");
      try {
        const data = new FormData();
        data.append("avatar", img);
        await axios
          .post("http://localhost:4000/api/upload", data, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((res) => console.log(http://localhost:4000/res.data.path));
      } catch (error) {
        console.log("Error:", error);
      }
    },
    [img]
  );
  const imageUrl = `http://localhost:4000/images/avatar-1697836678865-355680164`;

  // Now you can use `imageUrl` to display the image in your React component

  return (
    <div className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-400 h-[100vh] flex flex-col gap-[60px] justify-center items-center">
      <div className="w-[250px] h-[250px] rounded-full bg-slate-500 flex items-center justify-center">
        <img
          className="object-contain "
          src={imageUrl}
          alt="Account Image"
        />
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
