import Button from "./components/Button";
import Sponsors from "./components/Sponsors";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Welcome to Student Led Chess Association!
      </h1>
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          height: "500px",
          margin: "0 auto",
        }}
      >
        <Sponsors />
      </div>
    </>
  );
};

export default App;
