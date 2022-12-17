import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const Card = ({ name, img, info, price }) => {
  return (
    <>
      <VStack
        w={{ base: "56", sm: "72" }}
        p={{ base: "5", sm: "7" }}
        borderRadius={"50px"}
        shadow={"dark-lg"}
        transition={"all 0.4s"}
        css={{
          ":hover": {
            transform: "scale(1.01)",
            cursor: "pointer",
          },
        }}
      >
        <Box>
          <Center>
            <Heading fontSize={"large"} noOfLines={1}>
              {name}
            </Heading>
          </Center>
          <Center>
            <Image src={img} alt={name} w={"20"} h={"20"} />
          </Center>
          <Text noOfLines={2} textAlign={"justify"} mb={"2"}>
            {info}
          </Text>
          <HStack>
            <Button type="button"> - </Button>
            <Button type="button">Quantity : 1</Button>
            <Button type="button"> + </Button>
          </HStack>
          <Center>
            <Button type="button" bgColor={"blue.100"} m={"3"}>
              Add to Cart : {price}
            </Button>
          </Center>
        </Box>
      </VStack>
    </>
  );
};

export default Card;
