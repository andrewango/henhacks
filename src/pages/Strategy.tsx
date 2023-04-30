import React from "react";
import { Card, Text, Center, Heading, VStack, CardBody, Box } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import SlideShow from "../component/SlideShow";

export default function Strategy() {
    return (
        <>
            <div style={{padding: 10}}>
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