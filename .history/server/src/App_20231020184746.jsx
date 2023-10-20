import "./App.css";

export default function App() {
  return (
    <div className="bg-gray-100  flex justify-center items-center">
      <div className="w-[150px] h-[150px] rounded-full bg-slate-500">
        <img src={"Your Photo"} alt="Account Image" />
      </div>
      <form>
        <input type="file" />
      </form>
    </div>
  );
}
