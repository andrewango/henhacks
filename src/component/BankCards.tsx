import React from "react";
import {
    Link,
    Card,
    CardBody,
    Heading,
    Image,
    CardFooter,
    Button,
    VStack,
    Divider,
    Accordion,
    AccordionItem,
    AccordionIcon,
    AccordionButton,
    AccordionPanel,
    Center
} from "@chakra-ui/react";
import Chase from "../banks/chase.png";
import Chime from "../banks/chime.png";
import Aspiration from "../banks/aspiration.png";
import Axos from "../banks/axos.png";
import Nationwide from "../banks/nationwide.png";
import Quontic from "../banks/quontic.png";
import Penfed from "../banks/penfed.png";

export default function BankCards() {
    const bankImages = [
        {
            img: Chase,
            title: "CHASE",
            line1: "$200 Dollar Bonus for opening a new account",
            line2: "Get access to the Chase Bank Mobile app",
            line3: "FDIC Member",
            bio: "In a fast-moving and increasingly complex global economy, our success depends on how faithfully we adhere to our core principles: delivering exceptional client service; acting with integrity and responsibility; and supporting the growth of our employees.",
            link: "https://account.chase.com/consumer/banking/XQ44797?jp_cmp=rb/1066709/aff/3_137/na&CODE=Uy2LwS3NxCs-xSxBZZG3H0zZ01D.jKyh3Q&MSC=Uy2LwS3NxCs-xSxBZZG3H0zZ01D.jKyh3Q"
        },
        {
            img: Chime,
            title: "Chime",
            line1: "Offers automatic savings account",
            line2: "No minimum frees, no foreign transaction fees",
            line3: "FDIC  Insured Financial Instituation",
            bio: "Chime is a financial technology company founded on the premise that basic banking services should be helpful, easy and free. We want to profit with our members, not from them. That’s why our model doesn’t rely on overdraft fees, monthly service fees, service fees, minimum balance requirements, and more. We partner with regional banks to design member first financial products. This creates a more competitive market with better, lower-cost options for everyday Americans who aren’t being served well by traditional banks.",
            link: "https://www.chime.com/apply-debit-af/?ad=cj&value_prop=debit&CJEVENT=86feee6fe70c11ed817c00550a82b824&pid=9100892&SID=53e2ff78e92d&AID=14423172&clickid=86feee6fe70c11ed817c00550a82b824&cjdata=MXxOfDB8WXww"
        },
        {
            img: Aspiration,
            title: "Aspiration",
            line1: "Up to 83x national interest rate!",
            line2: "$200 Welcome bonus. Terms apply",
            line3: "Carbon offsets for gas purchases",
            bio: "We’re setting a new standard for the carbon market with high-quality, tech-enhanced carbon removal solutions. Our global portfolio of carbon projects helps businesses take concrete climate action at scale. Our team of climate experts deploys advanced monitoring and reporting tools to ensure every project delivers dependable and permanent impact, strengthens biodiversity, and benefits local communities. Invest with confidence in nature-based solutions and access a steady stream of verified carbon credits to drive positive, tangible change.",
            link: "https://www.aspiration.com/get-account?clickid=0ni1K0XAVxyNT1tznHyKJ0B9UkAVSa1Fu3-wxQ0&irgwc=1&utm_source=tpoint&utm_medium=paids&utm_campaign=aspiration-Get%20Account%20Link%20&utm_content=&utm_term=i-a-a-0-0"
        },
        {
            img: Axos,
            title: "Axos Bank",
            line1: "Earn up to 0.61% APY",
            line2: "Up to $200 Bonus for High-Yield Savings",
            line3: "FDIC Insured Financial Instituation",
            bio: "Axos Bank empowers consumers and businesses to easily manage their financial lives. Through a blend of human insight and digital expertise, we help our customers plan, bank, borrow, and invest in a way that’s both convenient and customized. More than two decades ago, Axos reinvented the banking model. By launching as a digital bank on July 4, 2000, we signaled our independence from brick-and-mortar banking. Since then, we've grown to over $18.4 billion in assets. By offering competitive interest rates, low to no fees, and convenient access, we've freed our customers from the constraints of traditional banking so they can focus on the important things in life.",
            link: "https://www.axosbank.com/ax-rewards-checking?utm_campaign=02762_rewchk_rc100_042623&utm_medium=affiliate&utm_source=rakuten&utm_content=18&utm_term=Lendstart&siteID=Uy2LwS3NxCs-oP2dQhvF.oq9AsVk_MOcMg&ranMID=44016&ranEAID=Uy2LwS3NxCs&ranSiteID=Uy2LwS3NxCs-oP2dQhvF.oq9AsVk_MOcMg"
        },
        {
            img: Nationwide,
            title: "Nationwide",
            line1: "80k ATMs across the United States",
            line2: "No minimum fees for some account types",
            line3: "DFIC Insured Financial Instituation",
            bio: "Over the past 90 years, focusing on customers and valuing people have helped Nationwide become one of the largest insurance and financial services companies in the world. Even though we have dozens of affiliated companies, people are our biggest resource. And our greatest asset in providing excellent customer service to our customers. That’s why our Procurement group makes sure our agents and associates get the best quality products and services, at the best possible cost. It's also why we have an Office of Customer Relations.",
            link: "https://nationwide.axosbank.com/nw/My-Checking?utm_campaign=01405_nwmychk_rakuten_college_investor_nationwie_checking&utm_medium=affiliate&utm_source=rakuten&utm_content=27&utm_term=Lendstart&siteID=Uy2LwS3NxCs-e5m_cLu7VWi5FwaRoXuiyA&ranMID=44016&ranEAID=Uy2LwS3NxCs&ranSiteID=Uy2LwS3NxCs-e5m_cLu7VWi5FwaRoXuiyA"
        },
        {
            img: Quontic,
            title: "Quontic Bank",
            line1: "No monthly or overdraft fees",
            line2: "Low minimum deposits",
            line3: "High Yield Savings with 0.75% APY",
            bio: "We’re the adaptive digital bank helping people grow their money with purpose. We’re changing the narrative of traditional banking – Quontic is innovative, digital-first, and customer-centric without sacrificing the personal touch. Our story began as a community bank based in New York City over a decade ago, and we carry that in our DNA. We are a FDIC member bank, and our customers have access to a network of over 90,000 surcharge-free ATMs nationwide, without the penalty of overdraft fees or monthly service fees.",
            link: "https://www.quontic.com/lp/high-interest-checking-account/?utm_medium=affiliate&utm_source=rakuten&utm_content=3&utm_term=Lendstart&siteId=Uy2LwS3NxCs-Y5EjjjwzYcjyFkQMhdZBGg&ranMID=47045&ranEAID=Uy2LwS3NxCs&ranSiteID=Uy2LwS3NxCs-Y5EjjjwzYcjyFkQMhdZBGg"
        },
        {
            img: Penfed,
            title: "PenFed Credit Union",
            line1: "Earn 0.60% APY on your Savings",
            line2: "$5 Minimum to open",
            line3: "Federally insured by the NCUA",
            bio: "Established in 1935, Pentagon Federal Credit Union (PenFed) is America’s second-largest federal credit union, serving over 2.8 million members worldwide with $36.6 billion in assets as of June 30, 2022. PenFed Credit Union offers market-leading certificates, checking, credit cards, personal loans, mortgages, auto loans, student loans, and a wide range of other financial services.",
            link: "https://www.credible.com/a/dd-penfed/?utm_source=Top5&utm_medium=referral&utm_campaign=pl_pf&utm_content=88adc6241326"
        }
    ];

    return (
        <>
            <div style={{ padding: 15 }}>
                <Center>
                    <VStack direction="row" spacing={5}>
                        {bankImages.map((bank) => (
                            <VStack>
                                <Card
                                    key={bank.title}
                                    boxShadow="md"
                                    direction={{ base: "column", sm: "row" }}
                                    overflow="hidden"
                                    transition="box-shadow 0.2s"
                                    variant="outline"
                                    width="1000px"
                                    height="300px"
                                    _hover={{ boxShadow: "2xl" }}
                                    align="center"
                                >
                                    <Link href={bank.link}>
                                        <Image
                                            alt={bank.title}
                                            maxW={{ base: "100%", sm: "350px" }}
                                            objectFit="cover"
                                            src={bank.img}
                                            width="300px"
                                            maxH="300px"
                                        />
                                    </Link>

                                    <Divider orientation="vertical" />

                                    <CardBody alignItems="center" py={6} px={8}>
                                        <Heading size="lg">
                                            {bank.title}
                                        </Heading>
                                        <Divider
                                            my={4}
                                            borderColor="gray.300"
                                        />
                                        <ul>
                                            <li>{bank.line1}</li>
                                            <li>{bank.line2}</li>
                                            <li>{bank.line3}</li>
                                        </ul>
                                    </CardBody>
                                    <Divider orientation="vertical" />
                                    <CardFooter>
                                        <Link href={bank.link}>
                                            <Button
                                                as="button"
                                                bg="blue.500"
                                                borderColor="blue.600"
                                                borderRadius="50px"
                                                border="2px"
                                                color="white"
                                                fontSize="20px"
                                                fontWeight="semibold"
                                                height="40px"
                                                lineHeight="2.1"
                                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                                _active={{
                                                    bg: "blue.300",
                                                    borderColor: "blue.200",
                                                    transform: "scale(0.90)"
                                                }}
                                                _focus={{
                                                    boxShadow:
                                                        "0 0 2px 2px rgba(0, 200, 255, .50), 0 1px 1px rgba(0, 0, 0, .15)"
                                                }}
                                                _hover={{
                                                    bg: "blue.600",
                                                    color: "white"
                                                }}
                                            >
                                                Visit Site
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                                <Accordion
                                    allowToggle
                                    width="1000px"
                                    color="white"
                                >
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <p>
                                                    Learn more about {}
                                                    <b>{bank.title}</b>
                                                </p>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            "{bank.bio}"
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </VStack>
                        ))}
                    </VStack>
                </Center>
            </div>
        </>
    );
}
