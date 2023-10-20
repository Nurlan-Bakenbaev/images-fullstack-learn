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
          marginBottom:'200px'
        }}>
        <img src={'here is image'} alt="Here is Image" />
      </div>
      <form> 
        <input type="file" />
      </form>
    </>
  );
}

export default App;
