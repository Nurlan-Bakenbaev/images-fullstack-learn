import "./App.css";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 h-[100vh] flex flex-col gap-[60px] justify-center items-center">
      <div className="w-[150px] h-[150px] rounded-full bg-slate-500 flex items-center justify-center">
        <img
          className=" object-contain"
          src={"Your Photo"}
          alt="Account Image"
        />
      </div>
      <form>
        <input type="file" />
      </form>
    </div>
  );
}
