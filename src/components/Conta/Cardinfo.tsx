import { Box } from "@chakra-ui/react";

interface ICardinfo{
    text: string
}

const CardInfo = ({text}: ICardinfo) => {
  return (
    <Box backgroundColor="#f5f1ed" minHeight="120px" padding={8} >
      {text}
    </Box>
  );
};

export default CardInfo;
