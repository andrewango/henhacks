import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import PersonalLoanCards from "../component/PersonalLoanCards";

export default function Landing() {
    return (
        <>
            <div style={{ padding: 15 }}>
                <Center>
                    <Heading>Personal Loans</Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
                <PersonalLoanCards></PersonalLoanCards>
            </div>
        </>
    );
}
