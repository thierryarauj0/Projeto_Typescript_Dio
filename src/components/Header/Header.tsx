import { Flex, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      as="header"
      w="full"
      bg="#E0DEDC"  
      p={4}
      boxShadow="dark-lg" 
      alignItems="center"
      justifyContent="center"
      
    >
      <Text fontSize="xl"  fontWeight="bold" color="gray.800">
        Thierry Bank
      </Text>
    </Flex>
  );
};
