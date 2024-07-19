import { ChakraProvider, Input, Button, Center, Box } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
// import styled from 'styled-components'

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#9413dc" padding='25px'>
        <Box backgroundColor="white" borderRadius='25px' paddingLeft='15'>
          <Center> 
            <h1>Faça o Login</h1>
           </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Button colorScheme="green">Entrar</Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
