import React from "react";
import { Box, Flex, Button, Heading, Text } from "@chakra-ui/react";
import { InputForm } from "../InputForms/InputForm";
export default function Homepage() {
  return (
    <>
      <Box bg="blue.500" color="white" p={4} m={"0% 0% 10% 0%"}>
        <Flex justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold">
            URL Shortener
          </Text>
          <Button size="sm">User</Button>
        </Flex>
      </Box>
      <InputForm />
    </>
  );
}
