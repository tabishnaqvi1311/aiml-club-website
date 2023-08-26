import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Banner from "../Components/Banner";
import InitiativesCard from "../Components/InitiativesCard";

const LatestNews = () => {
  return (
    <Flex flexDir={"column"} mb={20}>
      <Banner title="LATEST NEWS" />
      <VStack mt={24} mb={20} alignItems={"center"} spacing={24}>
        <Heading
          size={["xl", "2xl", "3xl"]}
          borderBottom={"solid"}
          borderBottomColor={"#EC3750"}
          borderBottomWidth={8}
          width={"fit-content"}
          ml={"auto"}
          mr={"auto"}
          textAlign={"center"}
        >
          Check Out The Latest Advancements in AI ML
        </Heading>
        <InitiativesCard
          image_src="https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524383.jpg?w=1480&t=st=1678861817~exp=1678862417~hmac=bf0a7b4e4ee1b4e7b39304a78f792b3b096153e0f2cb82cf11837de82b31bcb1"
          title="Lorem Deomos"
          description="In dignissim ut tortor quam. In et convallis suspendisse vel. Urna, ante ut mauris, dolor interdum libero, proin accumsan, vitae. In risus sit convallis volutpat."
        />
        <InitiativesCard
          image_src="https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524383.jpg?w=1480&t=st=1678861817~exp=1678862417~hmac=bf0a7b4e4ee1b4e7b39304a78f792b3b096153e0f2cb82cf11837de82b31bcb1"
          title="Lorem Deomos"
          description="In dignissim ut tortor quam. In et convallis suspendisse vel. Urna, ante ut mauris, dolor interdum libero, proin accumsan, vitae. In risus sit convallis volutpat."
        />
        <InitiativesCard
          image_src="https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524383.jpg?w=1480&t=st=1678861817~exp=1678862417~hmac=bf0a7b4e4ee1b4e7b39304a78f792b3b096153e0f2cb82cf11837de82b31bcb1"
          title="Lorem Deomos"
          description="In dignissim ut tortor quam. In et convallis suspendisse vel. Urna, ante ut mauris, dolor interdum libero, proin accumsan, vitae. In risus sit convallis volutpat."
        />
      </VStack>
      <Button
        as="a"
        href=""
        color="#ec3750"
        variant="outline"
        borderColor="#ec3750"
        borderWidth='2px'
        borderRadius={20}
        width={"120px"}
        ml={"auto"}
        mr={"auto"}
        mt={4}
        mb={4}
      >
        View More
      </Button>
    </Flex>
  );
};

export default LatestNews;
