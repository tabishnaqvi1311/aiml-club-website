import {
  Card,
  CardBody,
  Heading,
  IconButton,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ThingsCard = ({ icon, title, description, read_more_link }) => {
  return (
    <Card
      width={"350px"}
      mr={"auto"}
      ml={"auto"}
      mt={4}
      mb={4}
      boxShadow={"none"}
    >
      <CardBody>
        <VStack spacing={4}>
          <IconButton
            cursor={"default"}
            fontSize={"90px"}
            p={4}
            size="xl"
            color='white'
            background='hacker_red'
            _hover={{background:'#d43146'}}
            isRound='true'
            icon={icon}
          />
          <Heading size='lg'>{title}</Heading>
          <Text textAlign={"center"}>{description}</Text>
          <Link
            href={read_more_link}
            _hover={{
              textDecoration: "underline",
              textDecorationColor: "hacker_red",
            }}
          >
            <Text color="hacker_red">Know More →</Text>
          </Link>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ThingsCard;
