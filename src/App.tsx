// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header/Header"; 
import { Card } from "./components/FormLogin/Card"; 

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card id={1} />
    </ChakraProvider>
  );
}

export default App;
