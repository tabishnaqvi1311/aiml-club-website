import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Banner from "../../Components/Banner";
import MemberCard from "./MemberCard";
import Member_Data from "../../Member_Data.json";

const Members = () => {
  return (
    <Flex flexDirection={"column"} mb={20}>
      <Banner title="MEMBERS" />
      <SimpleGrid minChildWidth={"360px"} spacingX={24} spacingY={4} mt={24}>
        {Member_Data.members.map((member) => {
          return (
            <MemberCard
              profile_pic={member.profile_pic}
              name={member.name}
              por={member.por}
              date={member.date}
            />
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default Members;
