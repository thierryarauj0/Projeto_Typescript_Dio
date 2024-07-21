// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import {  AppContextProvider } from "./components/AppContext";
import MainRoutes from "../src/routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";



 

function App() {

  !getAllLocalStorage() && createLocalStorage();
  

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
