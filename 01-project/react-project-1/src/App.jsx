import { BookmarkMinus } from "lucide-react";
import hero from "./assets/hero.png";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src={hero} alt="hero" />
          <button>
            Save <BookmarkMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
