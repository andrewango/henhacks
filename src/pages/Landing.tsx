import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import PersonalLoanCards from "../component/PersonalLoanCards";

export default function Landing() {
    return (
        <>
            <div
                style={{
                    padding: 15,
                    background: "linear-gradient(to bottom, #00c6fb, #005bea)"
                }}
            >
                <Center>
                    <Heading fontSize="60px" fontFamily="Quantum" color="white">
                        <i>EnHence</i>
                    </Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
                <PersonalLoanCards></PersonalLoanCards>
            </div>
        </>
    );
}
