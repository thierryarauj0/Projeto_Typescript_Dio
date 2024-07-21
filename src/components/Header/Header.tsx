import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../AppContext";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation(); // Adiciona o useLocation para acessar a rota atual

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  // Altera a funcionalidade dependendo da página atual
  const handleAccountButton = () => {
    if (location.pathname === "/infoconta") {
      navigate("/conta/1");  // Se estiver em /infoconta, redireciona para /conta/1
    } else {
      navigate("/infoconta");  // Caso contrário, vai para /infoconta
    }
  };

  const accountButtonText = location.pathname === "/infoconta" ? "Voltar" : "Minha Conta";

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
          <Spacer />
          <Spacer />
          <Button size="md" onClick={handleAccountButton}>{accountButtonText}</Button>
          <Spacer />
          <Button size="md" onClick={logout}>Sair</Button>
        </>
      )}
    </Flex>
  );
};
