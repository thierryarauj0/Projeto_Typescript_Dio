// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { Card } from "./components/FormLogin/Card"; 
import { Layout } from "./components/Layout";
import { useState } from "react";



function App() {
  const [ value , setValue ] = useState(0)


  return (
    <ChakraProvider>
      <Layout>
      <Card id={1} />
    </Layout>
    </ChakraProvider>
  );
}

export default App;
