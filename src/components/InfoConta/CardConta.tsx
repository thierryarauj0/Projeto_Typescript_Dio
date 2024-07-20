import { Box, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cardconta = () => {
  return (
    <>
      <Center padding={20}>
        <Box>
          <Text fontSize="3xl">Informaçoes da Conta</Text>
          <Link to="/conta/1">
            <Text fontSize="xl">Minha Conta</Text>
          </Link>
        </Box>
      </Center>
    </>
  );
};

export default Cardconta;
