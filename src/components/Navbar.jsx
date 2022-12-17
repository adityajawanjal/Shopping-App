import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader fontSize={"4xl"} mb={"9"}>
            Visit More
          </DrawerHeader>
          <DrawerBody>
            <Link
              to={"/"}
              style={{
                display: "block",
                marginBottom: "20px",
                fontSize: "1.5rem",
              }}
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              to={"/category"}
              style={{
                display: "block",
                marginBottom: "20px",
                fontSize: "1.5rem",
              }}
              onClick={onClose}
            >
              Category
            </Link>
            <Link
              to={"/cart"}
              style={{
                display: "block",
                marginBottom: "20px",
                fontSize: "1.5rem",
              }}
              onClick={onClose}
            >
              Cart
            </Link>
          </DrawerBody>
          <DrawerFooter>Created by : Aditya Jawanjal</DrawerFooter>
        </DrawerContent>
      </Drawer>
      <HStack
        minH={"24"}
        fontSize={"2xl"}
        fontStyle={"oblique"}
        fontWeight={"bold"}
        color={"whatsapp.900"}
        bgColor={"green.100"}
      >
        <Box ml={"5"} display={{ sm: "none" }}>
          <GiHamburgerMenu size={30} onClick={onOpen} />
        </Box>
        <Image
          src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000"
          alt="cart"
          w={"16"}
          h={"16"}
          borderRadius={"full"}
        />
        <Box w={"52"} fontSize={{ md: "2xl" }}>
          Shoppy Cart
        </Box>
        <Box
          display={{ base: "none", sm: "flex" }}
          justifyContent={{ sm: "flex-end" }}
          w={"full"}
        >
          <Link to={"/"} style={{ marginRight: "3vw" }}>
            Home
          </Link>
          <Link to={"/cart"} style={{ marginRight: "3vw" }}>
            Cart
          </Link>
        </Box>
      </HStack>
    </>
  );
};

export default Navbar;
