import { Flex, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      as="header"
      w="full"
      bg="gray.800"
      p={4}
      alignItems="center"
      justifyContent="center"
      
    >
      <Text fontSize="xl"   color="white">
        Thierry Bank
      </Text>
    </Flex>
  );
};
