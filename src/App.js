import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </MantineProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
