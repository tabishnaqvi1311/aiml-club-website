import React, { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react';
import Banner from './Banner';
import { useParams } from 'react-router-dom';
import Events_Data from "../Events_Data.json";

const EventDetail = () => {

    const params = useParams();
    const id = params.id;

    const [event, setEvent] = useState({});

    useEffect(() => {
        const eventToDisplay = Events_Data.events.find((event, i) => String(id) === String(i));
        setEvent({ title: eventToDisplay.title, description: eventToDisplay.description });
    }, [id])

    return (
        <>
            <Banner title={event.title}/>
            <Box p={4} textAlign={'center'}>
                <Text mt={4} fontSize={'3xl'}>What it's About &rarr;</Text>
                <Text mt={4} fontSize={'large'}>{event.description}</Text>
            </Box>
        </>
    )
}

export default EventDetail
