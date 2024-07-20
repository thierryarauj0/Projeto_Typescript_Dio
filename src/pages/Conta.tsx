import {  Center, SimpleGrid } from "@chakra-ui/react";
import CardInfo from "../components/Conta/Cardinfo";

const Conta = () => {
  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        <CardInfo text={"Informaçoes do Acesso:"} />
        <CardInfo text={"Informaçoes da Conta:"} />
      </SimpleGrid>
    </Center>
  );
};
export default Conta;
