import React, { useEffect } from "react";
import {Container, HStack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProducts(data.data);
    };
    getAllProducts();
  }, []);
  return (
    <>
      <Container maxW={"98vw"}>
        <HStack
          wrap={"wrap"}
          justifyContent={"center"}
          m={"5"}
          gap={"5"}
          p={"5"}
        >
          {products.map((e) => {
            return (
              <Card
                key={e.id}
                name={e.title}
                img={e.image}
                info={e.description}
                price={e.price}
              />
            );
          })}
        </HStack>
      </Container>
    </>
  );
};

export default Home;
