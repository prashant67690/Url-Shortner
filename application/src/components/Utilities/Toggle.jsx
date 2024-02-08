import { Button, Box, useColorMode } from "@chakra-ui/react";
import React from "react";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Box
        position="absolute"
        top="17px"
        right="90px"
        variant="outline"
        size="sm"
      >
        <Button size="sm" onClick={() => toggleColorMode()}>
          Toggle {colorMode}
        </Button>
      </Box>
    </div>
  );
};

export default Toggle;
