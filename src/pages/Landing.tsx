import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import NavBar from "../component/NavBar";

export default function Landing() {
    return (
        <>
            <div style={{padding: 10}}>
                <Center>
                    <Heading>Reinvent Your Financial Life</Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
            </div>
        </>
    )
}