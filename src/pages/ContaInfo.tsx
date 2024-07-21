import { Center, Box, Spinner } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import CardConta from "../components/InfoConta/CardConta";

interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id:string;
  }

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>();
    const navigate = useNavigate()
    const{isLoggedIn}  = useContext(AppContext)
  
    !isLoggedIn && navigate('/')

   

    useEffect(() => {
        const getData = async () => {
          const data: any | UserData = await api;
          setUserData(data);
        };
        getData();
      }, []);

      useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.isLoggedIn) {
                setUserData(parsedUser);
            } else {
                navigate('/'); // Redireciona se o usuário não está logado
            }
        } else {
            navigate('/'); // Redireciona se não há dados de usuário no localStorage
        }
    }, [navigate]);
    
  return(
    typeof userData === 'undefined' || userData === null ? (
      <Center>
          <Spinner size="xl" />
      </Center>
  ) : (
      <>
          <Center padding={20}>
              <Box>
                  <CardConta
                      mainContent="Informações da conta:"
                      content={`Nome: ${userData.name}`}
                      content1={`E-mail: ${userData.email}`} />
              </Box>
          </Center>
      </>
  )
);
};

export default ContaInfo;