import React from "react";
import { Center, Container, Heading, Text } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import Textbox from "../component/Textbox";

export function QnA() {
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
                <br></br>
                <Container h="100vh" textAlign="center">
                    <Text fontWeight="bold" fontSize="3xl" color="white">
                        Discussion Thread
                    </Text>
                    <Textbox></Textbox>
                </Container>
            </div>
        </>
    );
}

export default QnA;
