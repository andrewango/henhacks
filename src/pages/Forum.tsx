import React from "react";
import { Center, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBar from "../component/NavBar";

export default function Forum() {
    return (
        <>
            <div style={{padding: 15}}>
                <Center id="center">
                    <Heading>Forums</Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
                <br></br>
                <Link to='/QnA'>
                    <Button colorScheme='blue' fontSize='3xl' variant='link'>Ask Questions Here!</Button>
                </Link>
                <br></br>
                <br></br>
                <Link to='/FAQ'>
                    <Button colorScheme='blue' fontSize='3xl' variant='link'>Frequently Asked Questions</Button>
                </Link>
            </div>
            
        </>
    )
}