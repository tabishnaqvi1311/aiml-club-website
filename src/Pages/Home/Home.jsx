import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Banner from "../../Components/Banner";
import { IoMdGitNetwork } from "react-icons/io";
import { AiFillFlag } from "react-icons/ai";
import { BiChip } from "react-icons/bi";
import ThingsCard from "./ThingsCard";
import InitiativesCard from "../../Components/InitiativesCard";
import EventCard from "../../Components/EventCard";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Flex flexDirection={"column"} mb={20}>
      <Banner title="AIML CLUB MRIIRS" />
      <Flex
        flexDirection={"column"}
        mt={24}
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <Heading
          size={["xl", "2xl", "3xl"]}
          borderBottom={"solid"}
          borderBottomColor={"hacker_red"}
          borderBottomWidth={8}
          width={"fit-content"}
          ml={"auto"}
          mr={"auto"}
        >
          Things We Do
        </Heading>
        <SimpleGrid minChildWidth={"360px"} spacingX={24} spacingY={4} mt={24}>
          <ThingsCard
            icon={<IoMdGitNetwork />}
            title="Networking"
            description="Bibendum etiam nec massa ok ok bendum etiam nec massa ok ok posuere neque diam. Mattis molestie feugiat nisi."
          />
          <ThingsCard
            icon={<AiFillFlag />}
            title="Skill Enhancement"
            description="Pellentesque iaculis erat molestie bendum etiam nec massa ok ok proin consectetur dignissim cc nisi, lacus."
          />
          <ThingsCard
            icon={<BiChip />}
            title="Development"
            description="Suspendisse libero amet, pharetr spendisse libero amet, pharetr Posuere sem ullamcol ok id at okok lobortis."
          />
        </SimpleGrid>
      </Flex>
      <VStack mt={24} alignItems={"center"} spacing={24}>
        <Heading
          size={["xl", "2xl", "3xl"]}
          borderBottom={"solid"}
          borderBottomColor={"hacker_red"}
          borderBottomWidth={8}
          width={"fit-content"}
          ml={"auto"}
          mr={"auto"}
        >
          Our Initiatives
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
      <Flex flexDirection={"column"} mt={24}>
        <Heading
          size={["xl", "2xl", "3xl"]}
          borderBottom={"solid"}
          borderBottomColor={"hacker_red"}
          borderBottomWidth={8}
          width={"fit-content"}
          ml={"auto"}
          mr={"auto"}
        >
          Events
        </Heading>
        <SimpleGrid minChildWidth={"360px"} spacingX={24} spacingY={4} mt={24} mb={10}>
          <EventCard
            image_src="./google io 21.png"
            title="Google IO 2023"
            date="September 1st Week"
            description="Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. Malesuada amet nisi libero, urna tristique aliquam."
          />
          <EventCard
            image_src="./google io 21.png"
            title="Google IO 2023"
            date="September 1st Week"
            description="Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. Malesuada amet nisi libero, urna tristique aliquam."
          />
          <EventCard
            image_src="./google io 21.png"
            title="Google IO 2023"
            date="September 1st Week"
            description="Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. Malesuada amet nisi libero, urna tristique aliquam."
          />
        </SimpleGrid>
        <Button
          as="a"
          href=""
          color="hacker_red"
          variant="outline"
          borderColor="hacker_red"
          borderWidth='2px'
          borderRadius={20}
          width={"160px"}
          ml={"auto"}
          mr={"auto"}
          mt={4}
          mb={4}
        >
          View All Events
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
