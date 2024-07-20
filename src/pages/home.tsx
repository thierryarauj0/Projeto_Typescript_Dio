import { Box, Center, Input } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";
import { Card } from "../components/FormLogin/Card";
import CustomButton from "../components/FormLogin/CustomButton";
import { login } from "../services/login";
import { useState } from "react";


const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <Card>
      <Box
        backgroundColor="white"
        boxShadow="dark-lg"
        borderRadius="25px"
        p="15"
        width="full"
        maxW="md"
      >
          <Center>
          <h1>Faça o Login</h1>
        </Center>

        <Input
          placeholder="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          mb="4"
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          mb="4"
        />
        <Center>
          <CustomButton
            onClick={() => login(email)}
            colorScheme="green"
            width="100%"
          >
            Entrar
          </CustomButton>
        </Center>
        
      </Box>
      
    
      </Card>
      <Footer />
    </>
  );
};

export default Home;
