import React from "react";
import {
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <>
      <Grid templateColumns={{ base: "auto", lg: "7fr 3fr" }} gap={1}>
        <GridItem>
          <TableContainer w={{ base: "100vw", sm: "inherit" }}>
            <Table
              variant={"striped"}
              bgColor={"teal.100"}
              fontSize={{ base: "2xs", sm: "initial" }}
            >
              <Thead>
                <Tr h={"16"} fontSize={{ base: "0.7rem", md: "initial" }}>
                  <Th>No.</Th>
                  <Th>Name</Th>
                  <Th display={{ base: "none", sm: "block" }}>Image</Th>
                  <Th>Quantity</Th>
                  <Th>Price</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1. </Td>
                  <Td>IPhone</Td>
                  <Td display={{ base: "none", sm: "block" }}>
                    <Image
                      src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000"
                      alt="iphone"
                      w={{ base: "12", md: "20" }}
                      h={{ base: "12", md: "20" }}
                      borderRadius={"full"}
                    />
                  </Td>
                  <Td>5</Td>
                  <Td>500</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
        <GridItem minH={"76.5vh"} bgColor={"ButtonShadow"}>
          <Grid
            templateRows={"1fr 5fr 1fr"}
            maxH={"76.5vh"}
            maxW={{ base: "100vw", sm: "initial" }}
          >
            <Center fontSize={"4xl"} fontWeight={"bold"}>
              Billing{" "}
            </Center>
            <TableContainer w={"96"}>
              <Table>
                <Tbody>
                  <Tr>
                    <Th>Price</Th>
                    <Td> - </Td>
                    <Td>50</Td>
                  </Tr>
                  <Tr>
                    <Th>Quantity</Th>
                    <Td> - </Td>
                    <Td>5</Td>
                  </Tr>
                  <Tr>
                    <Th>Charges</Th>
                    <Td> - </Td>
                    <Td>15</Td>
                  </Tr>
                  <Tr>
                    <Th>Total</Th>
                    <Td> - </Td>
                    <Td>15</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Center>
              <Button
                type="button"
                size={"lg"}
                w={"52"}
                bgColor={"linkedin.900"}
                color={"whiteAlpha.900"}
                css={{
                  ":hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                Buy Now
              </Button>
            </Center>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default Cart;
