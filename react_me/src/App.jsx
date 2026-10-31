import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="parent">
      <Nav />
      <Card user="gustavo" age="120" />
      <Card user="dune" age="110" />
    </div>
  );
};

export default App;
