// CustomButton.tsx
import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  onClick: () => void;  // Pode ser mais específico conforme necessário, como (event: React.MouseEvent<HTMLButtonElement>) => void
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
