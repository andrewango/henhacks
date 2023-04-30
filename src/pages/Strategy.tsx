import React from "react";
import { Text, Center, HStack, Heading, Box } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import SlideShow from "../component/SlideShow";
import MapPlace from "../component/MapPlace";

export default function Strategy() {
    return (
        <>
            <div style={{padding: 15}}>
                <Center id="center">
                    <Heading>Financial Strategy</Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
                <Center py={8}>
                <Text fontSize="20px" fontWeight="semibold">If you're in a tight situation with a low credit score, here's a potential strategy that may benefit you:</Text>
                </Center>
                <Center>
                <HStack overflow="hidden">
                    <SlideShow></SlideShow>
                    <Box textAlign="center" width="45vw">
                        <Text fontWeight="bold" fontSize="20px">Find Nearby Banks:</Text>
                        <MapPlace></MapPlace>
                    </Box>
                </HStack>
                </Center>
            </div>
        </>
    );
}