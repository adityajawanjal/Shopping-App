import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Flex
          direction={"column"}
          minH={"100vh"}
          justifyContent={"space-between"}
        >
          <Box>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </BrowserRouter>
    </>
  );
};

export default App;
