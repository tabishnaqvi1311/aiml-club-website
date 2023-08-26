import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const InitiativesCard = ({ image_src, title, description, link }) => {
  return (
    <Card
      boxShadow={"none"}
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
    >
      <CardBody>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={24}
          alignItems={"center"}
        >
          <Image
            src={image_src}
            alt=""
            borderRadius={8}
            width={{ base: "350px", md: "450px" }}
            height={{ base: "350px", md: "450px" }}
          />
          <VStack spacing={4} maxWidth={"650px"} alignItems={"flex-start"}>
            <Heading>{title}</Heading>
            <Text>{description}</Text>
            <Button
              cursor="pointer"
              as="a"
              href={link}
              color="hacker_red"
              variant="outline"
              borderColor="hacker_red"
              borderWidth='2px'
              borderRadius={20}
              width={"120px"}
              ml={"auto"}
              mr={"auto"}
              mt={4}
              mb={4}
            >
              Live Demo
            </Button>
          </VStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default InitiativesCard;
