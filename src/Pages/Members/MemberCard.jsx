import { Avatar, Card, CardBody, HStack, IconButton, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiFillTwitterCircle,AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'

const MemberCard = ({profile_pic,name,por,date,twitter_link,git_link,linkedin_link,insta_link}) => {
  return (
    <Card width={'fit-content'} mr={'auto'} ml={'auto'} mt={4} mb={4}>
        <CardBody>
            <HStack spacing={4}>
                <Avatar size={['xl','2xl']} name={name} src={profile_pic} borderRadius={8} width={'200px'} height={'200px'}/>
                <VStack alignItems={'flex-start'} spacing={3}>
                    <Text as='b' fontSize={'xl'} color={'#EC3750'}>{name}</Text>
                    <Text fontSize={'lg'}>{por}</Text>
                    <Text fontSize={'lg'}>{date}</Text>
                    <HStack>
                        <IconButton
                            as='a'
                            cursor={'pointer'}
                            fontSize={20}
                            size={'sm'}
                            colorScheme={'red'}
                            isRound={'true'}
                            icon={<AiFillTwitterCircle/>}
                            heref={twitter_link}
                        />
                        <IconButton
                            as='a'
                            cursor={'pointer'}
                            fontSize={20}
                            size={'sm'}
                            colorScheme={'red'}
                            isRound={'true'}
                            icon={<AiFillGithub/>}
                            heref={git_link}
                        />
                        <IconButton
                            as='a'
                            cursor={'pointer'}
                            fontSize={20}
                            size={'sm'}
                            colorScheme={'red'}
                            isRound={'true'}
                            icon={<AiFillLinkedin/>}
                            heref={linkedin_link}
                        />
                        <IconButton
                            as='a'
                            cursor={'pointer'}
                            fontSize={20}
                            size={'sm'}
                            colorScheme={'red'}
                            isRound={'true'}
                            icon={<AiFillInstagram/>}
                            heref={insta_link}
                        />
                    </HStack>
                </VStack>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default MemberCard