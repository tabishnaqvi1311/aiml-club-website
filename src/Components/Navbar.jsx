import React, { useState } from "react";
import {
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  Show,
  Hide,
  Box,
  VStack
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi"; // Import the HamburgerIcon

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Flex
      as="nav"
      w="100%"
      position="absolute"
      top={0}
      justifyContent={'space-evenly'}
      alignItems={"center"}
    >
      <Image height="80px" w="auto" src="./logo(2).png" />
      <Show below='sm'>
        <VStack>
          <GiHamburgerMenu size={50} color="white" onClick={() => setToggleMenu((prev) => !prev)} />
          {toggleMenu ?
            <Box position={"absolute"} top={10} zIndex={10} backgroundColor={"blackAlpha.700"} fontSize={25} padding={5} borderRadius={10} fontWeight={600}>
              <NavItem text="Events" link="/events" />
              <NavItem text="Members" link="/members" />
              <NavItem text="Projects" link="/projects" />
              <NavItem text="What we do" link="/" />
              <NavItem text="Join Us" link="#" />
            </Box>
            :
            ""
          }
        </VStack>
      </Show>

      <Show above="sm">
        <HStack w='50%' justifyContent={'space-evenly'}>
          <NavItem text="Events" link="/events" />
          <NavItem text="Members" link="/members" />
          <NavItem text="Projects" link="/projects" />
          <NavItem text="What we do" link="/" />
          <NavItem text="Join Us" link="#" />
        </HStack>

        <HStack spacing={6}>
          <SocialIcon
            icon={<AiFillLinkedin />}
            link="https://www.linkedin.com/in/avaraneeya-aiml-executive-society-18a07a28a"
          />
          <SocialIcon
            icon={<AiFillInstagram />}
            link="https://instagram.com/avaraneeya.aiml.club?igshid=MjEwN2IyYWYwYw=="
          />
        </HStack>
      </Show>
    </Flex>
  );
};

function NavItem({ text, link }) {
  return (
    <Box padding={2}>
      <Link to={link} >
        <Text fontSize={"lg"} color="white">
          {text}
        </Text>
      </Link>
    </Box>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <IconButton
      colorScheme="whiteAlpha"
      fontSize="4xl"
      aria-label=""
      isRound="true"
      icon={icon}
      as="a"
      href={link}
      background="none"
      _hover={{ background: 'none' }}
    />
  );
}

export default Navbar;
