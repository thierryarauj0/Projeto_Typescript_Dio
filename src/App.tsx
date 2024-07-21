// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import {  AppContextProvider } from "./components/AppContext";
import MainRoutes from "../src/routes";

const storageLocal = localStorage
console.log(storageLocal)

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
