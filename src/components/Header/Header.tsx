import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({login: false}  );
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
          <Button onClick={() => logout()}>Sair</Button>
        </>
      )}
    </Flex>
  );
};
