// Card.tsx
import { Box } from "@chakra-ui/react";




export const Card = ({children}: any) => {


  return (
    <Box
      minHeight="100vh"
      backgroundColor="#f5f1ed"
      p="25px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
     
        {children}
        
    
    </Box>
  );
};
