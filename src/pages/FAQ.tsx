import React from "react";
import { Center, Container, Heading, Text } from "@chakra-ui/react";
import NavBar from "../component/NavBar";

export function FAQ() {
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
                <Container>
                    <Text fontWeight="bold" fontSize="3xl" color="white">
                        Frequently Asked Questions
                    </Text>
                    <br></br>
                    <Text as="b" fontSize="xl" color="white">
                        Q: Where should I go if I need a loan?
                    </Text>
                    <br></br>
                    <Text fontSize="xl" color="white">
                        A: Our Home page has many resources to help!
                    </Text>
                    <br></br>
                    <Text as="b" fontSize="xl" color="white">
                        Q: How do I make a budget?
                    </Text>
                    <br></br>
                    <Text fontSize="xl" color="white">
                        A: You have to sit down and track all of your spendings
                        and revenue for the next few months. That way you can
                        get the full picture of where your money is and where it
                        is going. Then you can see what you can cut and save
                        some money on.
                    </Text>
                    <br></br>
                    <Text as="b" fontSize="xl" color="white">
                        Q: How much should I save each month?
                    </Text>
                    <br></br>
                    <Text fontSize="xl" color="white">
                        A: Typically at least 20% of your savings, the 50, 20,
                        30 rule is a good concept to base your spending and
                        savings on (50% on essential things, 20% for savings,
                        30% for whatever else). However, if this doesn't align
                        with your budget it is advisable to meet with a
                        financial professional so you can plan around any issues
                        you are dealing with.
                    </Text>
                    <br></br>
                    <Text as="b" fontSize="xl" color="white">
                        Q: Does credit score matter?
                    </Text>
                    <br></br>
                    <Text fontSize="xl" color="white">
                        A: As you would expect, yes it does. If you have a lower
                        credit score, you will typically be faced with worse
                        interest rates when it comes to loans, which can affect
                        you greatly when needing any large loan for a big
                        purchase like a car or house.
                    </Text>
                    <br></br>
                    <Text as="b" fontSize="xl" color="white">
                        Q: How should I pay off my debts?
                    </Text>
                    <br></br>
                    <Text fontSize="xl" color="white">
                        A: List your debts from smallest to largest, make sure
                        you can pay at least the minimum balance on each
                        account, then direct all extra money you get into the
                        smallest bill and work your way up.
                    </Text>
                </Container>
            </div>
        </>
    );
}

export default FAQ;
