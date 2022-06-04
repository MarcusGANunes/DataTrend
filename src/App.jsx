import "./App.css";
import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import { BrowserRouter} from "react-router-dom";

import RouteComponent from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavbarComponent />
          <RouteComponent/>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
