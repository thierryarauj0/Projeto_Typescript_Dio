import { ChakraProvider, Input, Button, Center, Box } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
// import styled from 'styled-components'

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#f5f1ed" p='25px' display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box backgroundColor="white" boxShadow="dark-lg"borderRadius='25px' p='15' width="full" maxW="md">
          <Center> 
            <h1>Faça o Login</h1>
          </Center>
          <Input placeholder="email" type="email" mb="4" />
          <Input placeholder="password"type="password" mb="4"  />
          <Center>
            <Button colorScheme="green" width='100%'>Entrar</Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
