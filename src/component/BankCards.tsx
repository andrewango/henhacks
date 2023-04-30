import React from "react";
import {
    Card,
    CardBody,
    Heading,
    Text,
    Image,
    CardFooter,
    Button,
    VStack
} from "@chakra-ui/react";
import Chase from "../banks/chase.png";
import Chime from "../banks/chime.png";
import Aspiration from "../banks/aspiration.png";
import Axos from "../banks/axos.png";
import Nationwide from "../banks/nationwide.png";
import Quontic from "../banks/quontic.png";
import Penfed from "../banks/penfed.png";
import { Link } from "react-router-dom";

export default function BankCards() {
    const bankImages = [
        {
            img: Chase,
            title: "CHASE",
            line1: "$200 Dollar Bonus for opening a new account",
            line2: "Get access to the Chase Bank Mobile app",
            line3: "FDIC Member",
            link: "https://account.chase.com/consumer/banking/XQ44797?jp_cmp=rb/1066709/aff/3_137/na&CODE=Uy2LwS3NxCs-xSxBZZG3H0zZ01D.jKyh3Q&MSC=Uy2LwS3NxCs-xSxBZZG3H0zZ01D.jKyh3Q"
        },
        {
            img: Chime,
            title: "Chime",
            line1: "Offers automatic savings account",
            line2: "No minimum frees, no foreign transaction fees",
            line3: "FDIC  Insured Financial Instituation",
            link: "https://www.chime.com/apply-debit-af/?ad=cj&value_prop=debit&CJEVENT=86feee6fe70c11ed817c00550a82b824&pid=9100892&SID=53e2ff78e92d&AID=14423172&clickid=86feee6fe70c11ed817c00550a82b824&cjdata=MXxOfDB8WXww"
        },
        {
            img: Aspiration,
            title: "Aspiration",
            line1: "Up to 83x national interest rate!",
            line2: "$200 Welcome bonus. Terms apply",
            line3: "Carbon offsets for gas purchases",
            link: "https://www.aspiration.com/get-account?clickid=0ni1K0XAVxyNT1tznHyKJ0B9UkAVSa1Fu3-wxQ0&irgwc=1&utm_source=tpoint&utm_medium=paids&utm_campaign=aspiration-Get%20Account%20Link%20&utm_content=&utm_term=i-a-a-0-0"
        },
        {
            img: Axos,
            title: "Axos Bank",
            line1: "Earn up to 0.61% APY",
            line2: "Up to $200 Bonus for High-Yield Savings",
            line3: "FDIC Insured Financial Instituation",
            link: "https://www.axosbank.com/ax-rewards-checking?utm_campaign=02762_rewchk_rc100_042623&utm_medium=affiliate&utm_source=rakuten&utm_content=18&utm_term=Lendstart&siteID=Uy2LwS3NxCs-oP2dQhvF.oq9AsVk_MOcMg&ranMID=44016&ranEAID=Uy2LwS3NxCs&ranSiteID=Uy2LwS3NxCs-oP2dQhvF.oq9AsVk_MOcMg"
        },
        {
            img: Nationwide,
            title: "Nationwide",
            line1: "80k ATMs across the United States",
            line2: "No minimum fees for some account types",
            line3: "DFIC Insured Financial Instituation",
            link: "https://nationwide.axosbank.com/nw/My-Checking?utm_campaign=01405_nwmychk_rakuten_college_investor_nationwie_checking&utm_medium=affiliate&utm_source=rakuten&utm_content=27&utm_term=Lendstart&siteID=Uy2LwS3NxCs-e5m_cLu7VWi5FwaRoXuiyA&ranMID=44016&ranEAID=Uy2LwS3NxCs&ranSiteID=Uy2LwS3NxCs-e5m_cLu7VWi5FwaRoXuiyA"
        },
        {
            img: Quontic,
            title: "Quontic Bank",
            line1: "No monthly or overdraft fees",
            line2: "Low minimum deposits",
            line3: "High Yield Savings with 0.75% APY",
            link: "https://www.quontic.com/lp/high-interest-checking-account/?utm_medium=affiliate&utm_source=rakuten&utm_content=3&utm_term=Lendstart&siteId=Uy2LwS3NxCs-Y5EjjjwzYcjyFkQMhdZBGg&ranMID=47045&ranEAID=Uy2LwS3NxCs&ranSiteID=Uy2LwS3NxCs-Y5EjjjwzYcjyFkQMhdZBGg"
        },
        {
            img: Penfed,
            title: "PenFed Credit Union",
            line1: "Earn 0.60% APY on your Savings",
            line2: "$5 Minimum to open",
            line3: "Federally insured by the NCUA",
            link: "https://www.credible.com/a/dd-penfed/?utm_source=Top5&utm_medium=referral&utm_campaign=pl_pf&utm_content=88adc6241326"
        }
    ];

    return (
        <>
            <div style={{ padding: 15 }}>
                <VStack direction="row" spacing={5} align="stretch">
                    {bankImages.map((bank) => (
                        <Card
                            direction={{ base: "column", sm: "row" }}
                            overflow="hidden"
                            variant="outline"
                        >
                            <Image
                                objectFit="cover"
                                maxW={{ base: "100%", sm: "350px" }}
                                src={bank.img}
                                alt={bank.title}
                            />
                            <CardBody>
                                <Heading size="md">{bank.title}</Heading>

                                <Text py="2">{bank.line1}</Text>
                                <Text py="2">{bank.line2}</Text>
                                <Text py="2">{bank.line3}</Text>
                            </CardBody>

                            <CardFooter>
                                <Link to={bank.link}>
                                    <Button variant="solid" colorScheme="blue">
                                        Learn More
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </VStack>
            </div>
        </>
    );
}
