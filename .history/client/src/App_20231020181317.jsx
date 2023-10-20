import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "col" }}>
      <div className="bg-white w-[130px] h ">
        <img src={"here is image"} alt="Here is Image" />
      </div>
      <form>
        <input type="file" />
      </form>
    </div>
  );
}

export default App;
