import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Banner from "../../Components/Banner";
import EventCard from "../../Components/EventCard";
import Events_Data from "../../Events_Data.json";

const Events = () => {
  // console.log(Events_Data)
  return (
    <Flex flexDirection={"column"} mb={20} >
      <Banner title="EVENTS" />
      <SimpleGrid minChildWidth={"360px"} spacingX={24} spacingY={4} mt={24}>
        {Events_Data.events.map((event, i) => {
          return (
            <EventCard
              id={i}
              image_src={event.image_src}
              title={event.title}
              date={event.date}
              description={event.description}
            />
          );
        })}
      </SimpleGrid>
      <Button
        as="a"
        href=""
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
        View More
      </Button>
    </Flex>
  );
};

export default Events;
