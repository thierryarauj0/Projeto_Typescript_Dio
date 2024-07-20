// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import Home from "../src/pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta/:id" element={<Conta />} />
            <Route path="/infoconta" element={<ContaInfo />} />

          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
