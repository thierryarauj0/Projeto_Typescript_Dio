// CustomButton.tsx
import { Button, ButtonProps } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";

interface CustomButtonProps extends ButtonProps {
  onClick: MouseEventHandler
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
