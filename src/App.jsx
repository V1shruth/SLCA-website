import Button from "./components/Button";
import Sponsors from "./components/Sponsors";
import ChessSplitView from "./components/ChessSplitView";

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
      <ChessSplitView />
    </>
  );
};

export default App;
