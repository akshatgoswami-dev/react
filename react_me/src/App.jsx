import Card from "./components/Card";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="parent">
      <Nav />
      <Card
        user="blue"
        age={120}
        img="https://i.pinimg.com/736x/f6/d8/56/f6d856ed6638d812b176dd3f32b3a665.jpg"
        link="https://github.com"
      />
      <Card
        user="green"
        age={110}
        img="https://i.pinimg.com/1200x/69/a7/3b/69a73b16f926bb4b1a5efdde5a67fc95.jpg"
        link="https://www.google.com"
      />

      <Card
        user="red"
        age={100}
        img="https://i.pinimg.com/736x/cc/72/4a/cc724a7cebb1123591db24222d352b7d.jpg"
        link="https://www.google.com"
      />
    </div>
  );
};

export default App;
