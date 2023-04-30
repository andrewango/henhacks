import React, { useState } from "react";
import { Image, Text, Card, CardBody, Stack, Button, Center, VStack, HStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slide1 from "../slides/Step 1.png";
import Slide2 from "../slides/Step 2.png";
import Slide3 from "../slides/Step 3.png";
import Slide4 from "../slides/Step 4.png";
import Slide5 from "../slides/Step 5.png";
import Slide6 from "../slides/Step 6.png";
import Slide7 from "../slides/Step 7.png";
import Slide8 from "../slides/Step 8.png";
import Slide9 from "../slides/Step 9.png";
import Slide10 from "../slides/Step 10.png";
import Slide11 from "../slides/Step 11.png";
import Slide12 from "../slides/Step 12.png";

export default function SlideShow(): JSX.Element {
    const cardData = [
        { img: Slide1, description: "First, choose 3 banks. Bank 3 will be the bank account that you remain with, so choose wisely." },
        { img: Slide2, description: "Open an account for Bank 1 and deposit $300." },
        { img: Slide3, description: "Borrow a $300 loan from Bank 1." },
        { img: Slide4, description: "Open an account for Bank 2 and deposit $300." },
        { img: Slide5, description: "Borrow a $300 loan from Bank 2." },
        { img: Slide6, description: "Open an account for Bank 3 and deposit $300." },
        { img: Slide7, description: "Borrow a $300 loan from Bank 3." },
        { img: Slide8, description: "Using your $300 loan from Bank 3, pay off your Bank 1 loan on time." },
        { img: Slide9, description: "Bank 1 will report that your credit score has increased. Withdraw your $300 from Bank 1 and use it to pay off your Bank 2 loan on time." },
        { img: Slide10, description: "Bank 2 will report that your credit score has increased. Withdraw your $300 from Bank 2 and use it to pay off your Bank 3 loan on time." },
        { img: Slide11, description: "Bank 3 will report that your credit score has increased. Now, you still have $300 in your account for Bank 3. Leave it there." },
        { img: Slide12, description: "Close your accounts for Bank 1 and Bank 2. Now, you will have positive credit reports from 3 different banks and an increased credit score." },
    ];
      
    const [cardIndex, setCardIndex] = useState<number>(0);
      
    function handleNextClick() {
        setCardIndex((prevIndex) =>
            prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
        );
    };

    function handlePreviousClick() {
        setCardIndex((prevIndex) =>
            prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
        );
    };
      
    return (
        <>
        <Center>
            <VStack>
            {cardData.map((card, index) => (
                cardIndex === index && (
                    <Card variant="elevated" textAlign="center" size='md'>
                        <CardBody>
                            <Image
                            src={card.img}
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Text>
                                {card.description}
                            </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                )
            ))}
            <HStack spacing={5}>
                { cardIndex === cardData.length - 1 ? <Button onClick={handleNextClick}>Restart</Button> : cardIndex === 0 ? <><Button onClick={handleNextClick} rightIcon={<ChevronRightIcon />}>Next</Button></> : <><Button onClick={handlePreviousClick} leftIcon={<ChevronLeftIcon />}>Previous</Button><Button onClick={handleNextClick} rightIcon={<ChevronRightIcon />}>Next</Button></>}
            </HStack>
            </VStack>
            </Center>
        </>
    );
}
      
      
      
      
      
      