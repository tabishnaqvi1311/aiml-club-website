import React from "react";
import {
  Card,
  CardBody,
  VStack,
  Image,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

const EventCard = ({ image_src, title, date, description, know_more_link }) => {
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
        <VStack spacing={5} alignItems={"flex-start"}>
          <Image src={image_src} w={'300px'} height='auto' alt="card-image" borderRadius={8} />
          <Heading color={"hacker_red"}>{title}</Heading>
          <Text color={"gray.400"}>{date}</Text>
          <Text>{description}</Text>
          <Link
            href={know_more_link}
            _hover={{
              textDecoration: "underline",
              textDecorationColor: "hacker_red",
            }}
          >
            <Text color={"hacker_red"}>Know More →</Text>
          </Link>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default EventCard;
