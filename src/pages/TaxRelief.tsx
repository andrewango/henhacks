import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import BankCards from "../component/BankCards";

export function TaxRelief() {
    return (
        <>
            <div style={{ padding: 15 }}>
                <Center id="center">
                    <Heading>Tax Relief</Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
                <br></br>
                <BankCards></BankCards>
            </div>
        </>
    );
}

export default TaxRelief;
