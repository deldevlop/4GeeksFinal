import { useState } from "react";
import * as bootstrap from "bootstrap";
import Routers from "./routers/Routers.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routers></Routers>
      </BrowserRouter>
    </>
  );
}

export default App;
