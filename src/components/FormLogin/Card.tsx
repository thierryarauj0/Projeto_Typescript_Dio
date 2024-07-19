// Card.tsx
import { Box, Center, Input } from "@chakra-ui/react";
import CustomButton from "./CustomButton"; // Certifique-se de que o caminho está correto
import { login } from "../../services/login"; // Ajuste o caminho conforme necessário

interface CardProps {
  id: number;
}

export const Card: React.FC<CardProps> = ({ id }) => {
  return (
    <Box minHeight="100vh" backgroundColor="#f5f1ed" p='25px' display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box backgroundColor="white" boxShadow="dark-lg" borderRadius='25px' p='15' width="full" maxW="md">
        <Center> 
          <h1>Faça o Login</h1>
        </Center>
        <Input placeholder="email" type="email" mb="4" />
        <Input placeholder="password" type="password" mb="4" />
        <Center>
          <CustomButton onClick={login} colorScheme="green" width='100%'>
            Entrar
          </CustomButton>
        </Center>
      </Box>
    </Box>
  );
};
