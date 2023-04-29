import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import Sidebar from "../component/sidebar";

export default function Landing() {
    return (
        <>
            <div style={{padding: 10}}>
                <Center>
                    <Heading>Reinvent Your Financial Life</Heading>
                </Center>
                <Sidebar children={undefined}></Sidebar>
            </div>
        </>
    )
}