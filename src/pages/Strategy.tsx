import React from "react";
import { Text, Center, HStack, Heading, Box } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import SlideShow from "../component/SlideShow";
import MapPlace from "../component/MapPlace";

export default function Strategy() {
    return (
        <>
            <div
                style={{
                    padding: 15,
                    background: "linear-gradient(to bottom, #00c6fb, #005bea)"
                }}
            >
                <Center id="center">
                    <Heading fontSize="60px" fontFamily="Quantum" color="white">
                        <i>EnHence</i>
                    </Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
                <Center py={8}>
                    <Text fontSize="20px" fontWeight="semibold" color="white">
                        If you're in a tight situation with a low credit score,
                        here's a potential strategy that may benefit you:
                    </Text>
                </Center>
                <Center>
                    <HStack overflow="hidden">
                        <SlideShow></SlideShow>
                        <Box textAlign="center" width="45vw">
                            <Text
                                fontWeight="bold"
                                fontSize="20px"
                                color="white"
                            >
                                Find Nearby Banks:
                            </Text>
                            <MapPlace></MapPlace>
                        </Box>
                    </HStack>
                </Center>
            </div>
        </>
    );
}
