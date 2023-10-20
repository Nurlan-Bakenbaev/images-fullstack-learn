import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "gray",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <img src={'here is image'} alt="Here is Image" />
      </div>
      <form>
        <input type="text" />
      </form>
    </>
  );
}

export default App;
