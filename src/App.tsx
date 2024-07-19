// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header/Header"; // Ajuste o caminho se necessário
import { Card } from "./components/FormLogin/Card"; // Certifique-se de que o caminho está correto

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card id={1} />
    </ChakraProvider>
  );
}

export default App;
