import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
    const [isSmallScreen] = useMediaQuery('(max-width:768px)')

  return (
    <Flex
      as="footer"
      p={{base:9,lg:14,xl:20}}
      backgroundColor="hacker_blue"
      flexDir={isSmallScreen ? "column" : "row"}
      justifyContent="space-between"
      alignItems='center'
    >
      <VStack alignItems={isSmallScreen?'center':'flex-start'} mb={isSmallScreen? 16:0}>
        <Heading size={{base:'sm',lg:"md"}} color='hacker_red'>
          AIML Club
        </Heading>
        <VStack alignItems={isSmallScreen?'center':'flex-start'}>
          <FooterText text="Events" link='/events'/>
          <FooterText text="Our Team" link='/members'/>
          
          <FooterText text="What we do" link='/'/>
          <FooterText text="Projects" link='/projects' />
          <FooterText text="Join Us" link='/#' />
        </VStack>
      </VStack>
      <VStack w={"350px"} alignItems={isSmallScreen?'center':'flex-start'} mb={isSmallScreen? 16:0}>
        <Heading size={{base:'sm',lg:"md"}} color='hacker_red'>
          Address
        </Heading>
        <Text fontSize={{base:'md',lg:"lg"}} color="white" textAlign={isSmallScreen?'center':'none'}>
        Manav Rachna Campus Rd, Gadakhor Basti Village, Sector 43, Faridabad, Haryana 121004
        </Text>
        <Text fontSize={{base:'md',lg:"lg"}} color="white" textAlign={isSmallScreen?'center':'none'}>
          All rights reserved, AIML CLub MRIIRS <br /> Designed with ♥ Haider Abdi
        </Text>
      </VStack>
      <VStack justifyContent='space-evenly'>
        <Heading size={{base:'sm',lg:"md"}} color='hacker_red' mb={6}>
          Socials
        </Heading>
        <Image height='110px' w='auto' src='./logo (2).png'/>
        <HStack spacing={6}>
          {/*<SocialIcon icon={<AiFillTwitterCircle/>} link='https://twitter.com' />
          <SocialIcon icon={<AiFillGithub/>} link='https://github.com' />*/}
          <SocialIcon icon={<AiFillLinkedin/>} link='https://www.linkedin.com/in/avaraneeya-aiml-executive-society-18a07a28a' />
          <SocialIcon icon={<AiFillInstagram/>} link='https://instagram.com/avaraneeya.aiml.club?igshid=MjEwN2IyYWYwYw==' />
        </HStack>
      </VStack>
    </Flex>
  );
};

function FooterText({ text, link }) {
  return (
    <Link href={link} _hover={{textDecoration:'none'}}>
      <Text fontSize={{base:'md',lg:'lg'}} color="white">
        {text}
      </Text>
    </Link>
  );
}

function SocialIcon({icon,link}) {
  return (
    <IconButton
      colorScheme="whiteAlpha"
      fontSize='4xl'
      aria-label=""
      isRound="true"
      icon={icon}
      as="a"
      href={link}
      background='none'
    />
  );
}

export default Footer;
