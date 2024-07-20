// Card.tsx
import { Box, Center, Input } from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { login } from "../../services/login";
import { useState } from "react";

interface CardProps {
  id: number;
}

export const Card: React.FC<CardProps> = ({ id }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Box
      minHeight="100vh"
      backgroundColor="#f5f1ed"
      p="25px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
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
    </Box>
  );
};
