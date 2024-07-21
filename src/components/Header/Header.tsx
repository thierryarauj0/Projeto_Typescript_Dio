import {  Button, Center, Flex,  Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../AppContext";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation(); 
  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleAccountButton = () => {
    if (location.pathname === "/infoconta") {
      navigate("/conta/1");  
    } else {
      navigate("/infoconta"); 
    }
  };

  const accountButtonText = location.pathname === "/infoconta" ? "Voltar" : "Minha Conta";

  return (
    <Flex p={5} background="gray.800" alignItems="center" justifyContent="space-between">
    <Center>
      <Text fontSize="3xl" color="white">
        Thierry Bank
      </Text>
    </Center>
    {isLoggedIn && (
      <Flex>
        <Button size="md" mr={4} onClick={handleAccountButton}>{accountButtonText}</Button>
        <Button size="md" onClick={logout}>Sair</Button>
      </Flex>
    )}
  </Flex>
  


  );
};
