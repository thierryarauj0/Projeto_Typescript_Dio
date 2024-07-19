import { Flex, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      as="header"
      w="full"
      bg="#E0DEDC"  // Cor de fundo combinando com o App
      p={4}
      boxShadow="dark-lg"  // Sombra leve para um efeito sutil
      alignItems="center"
      justifyContent="center"
      
    >
      <Text fontSize="xl"  fontWeight="bold" color="gray.800">
        Thierry Bank
      </Text>
    </Flex>
  );
};
