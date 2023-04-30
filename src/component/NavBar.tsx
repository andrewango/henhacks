import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const navLinks = [
        { label: "Personal Loans", path: "/" },
        { label: "Banking", path: "/Banking" },
        { label: "Strategy", path: "/Strategy" },
        { label: "Forum", path: "/Forum" }
    ];

    return (
        <Box
            as="nav"
            position="sticky"
            top={0}
            zIndex={99999999}
            py={2}
            bgGradient="linear(to-b, cyan.600, blue.400)"
            boxShadow="md"
        >
            <Flex
                justify="space-between"
                align="center"
                wrap="wrap"
                maxW={{ base: "100%", md: "80%" }}
                mx="auto"
            >
                <Text
                    as="span"
                    fontWeight="bold"
                    color="white"
                    fontSize={{ base: "xl", md: "2xl" }}
                    px={{ base: 4, md: 6 }}
                    py={{ base: 2, md: 3 }}
                    borderRadius="md"
                    fontFamily="Quantum"
                >
                    <i>EnHence</i>
                </Text>
                <Box
                    display={{ base: "none", md: "block" }}
                    mr={{ base: 0, md: 10 }}
                >
                    {navLinks.map((link) => (
                        <Link key={link.path} to={link.path}>
                            <Text
                                as="span"
                                fontWeight="bold"
                                color="white"
                                fontSize={{ base: "md", md: "lg" }}
                                transition="background-color 0.3s ease"
                                _hover={{
                                    bgGradient:
                                        "linear(to-b, blue.700, blue.900)",
                                    color: "white"
                                }}
                                borderRadius="md"
                                px={{ base: 4, md: 6 }}
                                py={{ base: 2, md: 3 }}
                            >
                                {link.label}
                            </Text>
                        </Link>
                    ))}
                </Box>
                <Box display={{ base: "block", md: "none" }} onClick={() => {}}>
                    <svg
                        fill="white"
                        width="24px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </Box>
            </Flex>
        </Box>
    );
}
