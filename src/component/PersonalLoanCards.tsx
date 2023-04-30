import React from "react";
import {
    Card,
    CardBody,
    Heading,
    Text,
    Image,
    CardFooter,
    Button,
    VStack,
    Link,
    Center,
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    HStack,
    Box
} from "@chakra-ui/react";
import { PersonalLoanCardProps } from "./PersonalLoanCardProps";
import BankRate from "../personal-loan-logos/BankRate.webp";
import BestEgg from "../personal-loan-logos/BestEgg.jpg";
import Credible from "../personal-loan-logos/Credible.png";
import Discover from "../personal-loan-logos/Discover.jpeg";
import Figure from "../personal-loan-logos/Figure.jpg";
import LendingTree from "../personal-loan-logos/LendingTree.jpg";
import LightStream from "../personal-loan-logos/LightStream.png";
import SoFi from "../personal-loan-logos/SoFi.png";
import UniversalCredit from "../personal-loan-logos/Universal Credit.png";
import Upgrade from "../personal-loan-logos/Upgrade.png";

export default function PersonalLoanCards() {
    const personalLoans: PersonalLoanCardProps[] = [
        {
            img: LendingTree,
            title: "LendingTree",
            apr: "5.99% - 35.99%",
            loanTerm: "3-180 months",
            maxLoan: 50,
            minCreditScore: 550,
            link: "https://www.lendingtree.com/lp/personal-loans/marie.html?lpid=pl0047&SpId=pm-pl&mtaid=23CDD&esourceid=6427466&csource=1&cterm=360288102&cproduct=pl&cchannel=perf&cname=freeform&cpad=1&r=1&800num=hide&siteid=1111c4a32caf26bc&sessionid=2a39cf26-c135-4ddb-a50c-f21512826432&mta=1"
        },
        {
            img: SoFi,
            title: "SoFi",
            apr: "8.99% - 23.43% with autopay",
            loanTerm: "24-84 months",
            maxLoan: 100,
            minCreditScore: 680,
            link: "https://www.sofi.com/signup/landing-register/pl?clickId=TciS0LXAExyNW1cWnwR:7Q4zUkAVkWSdo2UlxY0&irgwc=1&adId=843613&adName=SoFi%20Personal%20Loan&partnerId=133263&partnerName=Traffic%20Point%20Ltd.&adTarget=personal&partnerType=Affiliate&adDepartment=BD&sharedId=&ami=&programId=11190&utm_source=impact&utm_medium=affiliates&utm_campaign=SoFi%20Personal%20Loan"
        },
        {
            img: Credible,
            title: "Credible",
            apr: "5.40% - 35.99%",
            loanTerm: "12-84 months",
            maxLoan: 100,
            minCreditScore: 600,
            link: "https://www.credible.com/personal-loans/borrower/step/amount"
        },
        {
            img: BestEgg,
            title: "Best Egg",
            apr: "5.99% - 29.99%",
            loanTerm: "36-60 months",
            maxLoan: 50,
            minCreditScore: 600,
            link: "https://www.bestegg.com/personal-loans/"
        },
        {
            img: BankRate,
            title: "Bankrate",
            apr: "6.24% - 35.99%",
            loanTerm: "6-144 months",
            maxLoan: 100,
            minCreditScore: 550,
            link: "https://www.bankrate.com/loans/personal-loans/prequalification/loan-amount"
        },
        {
            img: LightStream,
            title: "LightStream",
            apr: "7.49% - 24.49% with autopay",
            loanTerm: "24-144 months",
            maxLoan: 100,
            minCreditScore: 660,
            link: "https://www.lightstream.com/"
        },
        {
            img: Figure,
            title: "Figure",
            apr: "5.75% - 22.94%",
            loanTerm: "36-60 months",
            maxLoan: 50,
            minCreditScore: 680,
            link: "https://www.figure.com/"
        },
        {
            img: Upgrade,
            title: "Upgrade",
            apr: "8.49% - 35.99%",
            loanTerm: "24-84 months",
            maxLoan: 50,
            minCreditScore: 580,
            link: "https://www.upgrade.com/personal-loans/?device=c&utm_term=upgrade%20loan&utm_source=gad&utm_medium=cpc&utm_campaign=b_brand_loans&gclid=Cj0KCQjwgLOiBhC7ARIsAIeetVChBA8beklIp9CNwU-1DDN84jgejMur3ccItL4frPPb_lFe0-WBCTAaAmZrEALw_wcB"
        },
        {
            img: Discover,
            title: "Discover",
            apr: "6.99% - 24.99%",
            loanTerm: "36-84 months",
            maxLoan: 40,
            minCreditScore: 660,
            link: "https://www.discover.com/personal-loans/pm/lo-brand/?cpn=SEM:brand:National&CHLSRC=BRN:DSKT&adpos=&creative=613075670301&device=c&matchtype=e&network=g&&&gclid=Cj0KCQjwgLOiBhC7ARIsAIeetVBJWHNM9PlZ8nLa9Z5ucpfz905M5m1eUr1tc_GTgwwKU3X_MDCurpoaAkCHEALw_wcB&gclsrc=aw.ds"
        },
        {
            img: UniversalCredit,
            title: "Universal Credit",
            apr: "11.69% - 35.99%",
            loanTerm: "36-84 months",
            maxLoan: 50,
            minCreditScore: 560,
            link: "https://www.universal-credit.com/"
        }
    ];

    return (
        <>
            <div style={{ padding: 15 }}>
                <Center>
                    <VStack direction="row" spacing={5}>
                        {personalLoans.map((loan) => (
                            <VStack>
                                <Card
                                    key={loan.title}
                                    boxShadow="md"
                                    direction={{ base: "column", sm: "row" }}
                                    overflow="hidden"
                                    transition="box-shadow 0.2s"
                                    variant="outline"
                                    width="850px"
                                    height="300px"
                                    _hover={{ boxShadow: "2xl" }}
                                    align="center"
                                >
                                    <Link href={loan.link}>
                                        <Image
                                            alt={loan.title}
                                            maxW={{ base: "100%", sm: "350px" }}
                                            objectFit="cover"
                                            src={loan.img}
                                            width="300px"
                                            maxH="300px"
                                        />
                                    </Link>

                                    <Divider orientation="vertical" />

                                    <CardBody alignItems="center" py={6} px={8}>
                                        <Heading size="lg">
                                            {loan.title}
                                        </Heading>
                                        <Divider
                                            my={4}
                                            borderColor="gray.300"
                                        />
                                        <Text py={2}>
                                            <b>APR: </b>
                                            {loan.apr}
                                        </Text>
                                        <Text py={2}>
                                            <b>Loan Term: </b>
                                            {loan.loanTerm}
                                        </Text>
                                        <Text py={2}>
                                            <b>Maximum Loan: </b>${loan.maxLoan}
                                            k
                                        </Text>
                                        <Text py={2}>
                                            <b>Minimum Credit Score: </b>
                                            {loan.minCreditScore}
                                        </Text>
                                    </CardBody>
                                    <Divider orientation="vertical" />
                                    <CardFooter>
                                        <Link href={loan.link}>
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
                                                View Rates
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                                <Accordion
                                    allowToggle
                                    width="850px"
                                    color="white"
                                >
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <p>
                                                    Learn more about{" "}
                                                    <b>{loan.title}</b>
                                                </p>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack
                                                maxW="850px"
                                                textAlign="center"
                                            >
                                                <Box flex={1}>
                                                    <Text fontWeight="bold">
                                                        Pros
                                                    </Text>
                                                    <Text>1</Text>
                                                    <Text>2</Text>
                                                    <Text>3</Text>
                                                </Box>
                                                <Box flex={1}>
                                                    <Text fontWeight="bold">
                                                        Cons
                                                    </Text>
                                                    <Text>1</Text>
                                                    <Text>2</Text>
                                                    <Text>3</Text>
                                                </Box>
                                            </HStack>
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
