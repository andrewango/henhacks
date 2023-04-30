import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import SlideShow from "../component/SlideShow";

export default function Strategy() {
    return (
        <>
            <div style={{padding: 15}}>
                <Center id="center">
                    <Heading>Financial Strategy</Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
                <SlideShow></SlideShow>
            </div>
        </>
    );
}