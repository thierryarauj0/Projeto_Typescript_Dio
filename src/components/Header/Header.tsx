import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Flex p={5} background="gray.800">
      <Box bg="gray.800">
        <Center>
          <Text fontSize="3xl" color="white">
            Thierry Bank
          </Text>
        </Center>
      </Box>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button  onClick={logout}>Sair</Button>
        </>
      )}
    </Flex>
  );
};
