import { Box,  Text } from "@chakra-ui/react";
import {  } from "react-router-dom";

interface ICardConta {
  mainContent: string;
  content: string;
  content1: string;
}

  
  const CardConta = ({mainContent , content , content1}: ICardConta) => {
    return (
      <Box backgroundColor="#f5f1ed" minHeight="120px" padding={8} >
        <Text fontSize='2xl' fontWeight='bold'>
          {mainContent}
        </Text>
        <Text fontSize='xl'>
          {content}
        </Text>
        <Text fontSize='xl'>
          {content1}
        </Text>
      </Box>
    );
  };


export default CardConta;
