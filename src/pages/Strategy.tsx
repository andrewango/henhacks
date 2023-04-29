import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../component/sidebar";

export default function Strategy() {
    return (
        <>
            <div style={{padding: 10}}>
                <Center>
                    <Heading>Strategy</Heading>
                </Center>
                <Sidebar children={undefined}></Sidebar>
            </div>
        </>
    )
}