import { Box, Text } from "@chakra-ui/react";

interface ICardinfo {
    mainContent: string,
    content: string,
  }
  

const CardInfo = ({mainContent , content }: ICardinfo) => {
  return (
    <Box backgroundColor="#f5f1ed" minHeight="120px" padding={8} >
      <Text fontSize='2xl' fontWeight='bold'>
        {mainContent}
      </Text>
      <Text fontSize='xl'>
        {content}
      </Text>
      
    </Box>
  );
};

export default CardInfo;
