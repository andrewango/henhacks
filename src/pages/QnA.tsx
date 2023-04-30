import React from "react";
import { Center, Heading, Text } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import Textbox from "../component/Textbox";

export function QnA() {
    return (
        <>
            <div style={{padding: 15}}>
                <Center id="center">
                    <Heading>Forums</Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
                <br></br>
                <Text fontSize='3xl'>Ask Questions Here!</Text>
                <Textbox></Textbox>
            </div>
        </>
    )
}

export default QnA;