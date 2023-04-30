import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import BankCards from "../component/BankCards";

export default function Banking() {
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
                <BankCards></BankCards>
            </div>
        </>
    );
}
