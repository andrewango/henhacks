import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import NavBar from "../component/NavBar";

export default function Forum() {
    return (
        <>
            <div style={{padding: 10}}>
                <Center id="center">
                    <Heading>Forum</Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
            </div>
        </>
    )
}