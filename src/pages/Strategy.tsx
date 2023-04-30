import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import GoogleMaps from "../component/GoogleMaps";

export default function Forum() {
    return (
        <>
            <div style={{padding: 10}}>
                <Center id="center">
                    <Heading>Strategy</Heading>
                </Center>
                <br></br>
                <NavBar></NavBar>
<<<<<<< Updated upstream
                <p>Hey</p>
            </div>
            <div>
                <GoogleMaps></GoogleMaps>
=======
                <SlideShow></SlideShow>
                <Map></Map>
>>>>>>> Stashed changes
            </div>
        </>
    )
}