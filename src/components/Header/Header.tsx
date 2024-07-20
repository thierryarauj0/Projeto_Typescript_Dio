import { Box, Center,  Text } from "@chakra-ui/react";

export const Header = () => {
  

  return (
    <Box bg="gray.800">
      <Center>
        <Text fontSize="3xl" color="white">
          Thierry Bank
        </Text>
      </Center>
      {/* <Button borderRadius={0} bg="#f5f1ed">
        Sair
      </Button> */}
    </Box>
  );
};
