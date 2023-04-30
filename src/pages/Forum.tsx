import React from "react";
import { Center, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBar from "../component/NavBar";

export default function Forum() {
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
                <Center>
                    <Link to="/QnA">
                        <Button
                            colorScheme="blue"
                            fontSize="3xl"
                            variant="link"
                            color="white"
                        >
                            Ask Questions Here!
                        </Button>
                    </Link>
                </Center>
                <br></br>
                <br></br>
                <Center>
                    <Link to="/FAQ">
                        <Button
                            colorScheme="blue"
                            fontSize="3xl"
                            variant="link"
                            color="white"
                        >
                            Frequently Asked Questions
                        </Button>
                    </Link>
                </Center>
            </div>
        </>
    );
}
