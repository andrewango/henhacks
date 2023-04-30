import React from "react";
import { Center, Heading, Text } from "@chakra-ui/react";
import NavBar from "../component/NavBar";

export function FAQ() {
    return (
        <>
            <div style={{padding: 15}}>
                <Center id="center">
                    <Heading>Forums</Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
                <br></br>
                <Text fontSize='3xl'>Frequently Asked Questions</Text>
                <br></br>
                <Text fontSize='xl'>Q: Where should I go if I need a loan?</Text>
                <br></br>
                <Text fontSize='xl'>A: Our Strategies page has many resources to help!</Text>
            </div>
        </>
    )
}

export default FAQ;