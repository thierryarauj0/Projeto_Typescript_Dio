import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "../components/Conta/Cardinfo";
import { useState, useEffect } from "react";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
}
const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();


  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  console.log(userData)

  const actualData = new Date()
  console.log(actualData.toDateString())


  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
      {
            userData === undefined || userData === null ?
            (
                <Center>
                    <Spinner size='xl'/>
                </Center>
            ) :
            (
       <>
        <CardInfo mainContent={`Bem vindo(a) ${userData?.name}`} content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>         
        <CardInfo mainContent={"Saldo:"} content={`R$${userData?.balance}`}  />

       </>
            )
        }
      </SimpleGrid>
    </Center>
  );
};
export default Conta;
