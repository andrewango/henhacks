import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import Sidebar from "../component/sidebar";

export default function Forum() {
    return (
        <>
            <div style={{padding: 10}}>
                <Center>
                    <Heading>Forum</Heading>
                </Center>
                <Sidebar children={undefined}></Sidebar>
            </div>
        </>
    )
}