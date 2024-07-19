// Card.tsx
import { Box, Center, Input } from "@chakra-ui/react";
import CustomButton from "./CustomButton"; 
import { login } from "../../services/login"; 
import { useEffect, useState } from "react";
import {api } from '../../api'

interface CardProps {
  id: number;
}

interface UserData {
  email : string,
  password: string,
  name: string
}

export const Card: React.FC<CardProps> = ({ id }) => {
  const [ userData, setUserData ] = useState<null | UserData>()
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');  

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    getData()
  } , [])

// if(userData === null || userData === undefined){

// }
 
  return (
    <Box minHeight="" backgroundColor="#f5f1ed" p='25px' display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box backgroundColor="white" boxShadow="dark-lg" borderRadius='25px' p='15' width="full" maxW="md">
        {
        userData === null || userData === undefined ? 
        <h1>Loading...</h1> :
        <h1>Informaçoes Carregadas:</h1>
        }        
        <Center> 
          <h1>Faça o Login</h1>
        </Center>
         <p>{userData?.name}</p> 
        <Input placeholder="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} mb="4" />
        <Input placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} mb="4" />
        <Center>
          <CustomButton onClick={() => login(email)} colorScheme="green" width='100%'>
            Entrar
          </CustomButton>
        </Center>
      </Box>
    </Box>
  );
};
