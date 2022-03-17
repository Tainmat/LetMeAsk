import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export const TestContext = createContext({} as any);

function App() {
  const [value, setValue] = useState();

  return (
    <TestContext.Provider value={{ value, setValue }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </BrowserRouter>
    </TestContext.Provider>
  );
}

export default App;
