import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <Box
            as="nav"
            display="flex"
            justifyContent="center"
            position="sticky"
            top={0}
            zIndex={99999999}
            py={4}
            bg="blue.500"
            data-testid="bar"
        >
            <Link to="/">
                <Box
                    as="span"
                    fontSize="lg"
                    fontWeight="bold"
                    color="white"
                    px={4}
                    py={2}
                    transition="background-color 0.3s ease"
                    _hover={{ bgColor: "blue.700", color: "white" }}
                    borderRadius="md"
                    mr={4}
                >
                    Home
                </Box>
            </Link>
            <Link to="/Strategy">
                <Box
                    as="span"
                    fontSize="lg"
                    fontWeight="bold"
                    color="white"
                    px={4}
                    py={2}
                    transition="background-color 0.3s ease"
                    _hover={{ bgColor: "blue.700", color: "white" }}
                    borderRadius="md"
                >
                    Strategy
                </Box>
            </Link>
            <Link to="/Forum">
                <Box
                    as="span"
                    fontSize="lg"
                    fontWeight="bold"
                    color="white"
                    px={4}
                    py={2}
                    transition="background-color 0.3s ease"
                    _hover={{ bgColor: "blue.700", color: "white" }}
                    borderRadius="md"
                >
                    Forum
                </Box>
            </Link>
        </Box>
    );
}