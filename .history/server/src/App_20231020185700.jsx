import "./App.css";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-400 h-[100vh] flex flex-col gap-[60px] justify-center items-center">
      <div className="w-[250px] h-[250px] rounded-full bg-slate-500 flex items-center justify-center">
        <img
          className=" object-contain"
          src={"Your Photo"}
          alt="Account Image"
        />
      </div>
      <form className="flex">
        <input type="file" />
        <button>Change Photo</button>
      </form>
    </div>
  );
}
