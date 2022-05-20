import React from "react";
import {Box, Container, HStack, Image} from "@chakra-ui/react";
import Search from "./Search";

const Navbar = () => {
    return (
        <Box as="section">
            <Box as="nav" boxShadow="0 4px 10px 0 #0000001A">
                <Container maxW={{ base: 'full', lg: '1150px' }} py={{ base: '4', lg: '5' }}>
                    <HStack justify="space-between">
                        <Image width="50%" src="https://i.postimg.cc/tTNXYGB0/logo.png" />
                        <Search />
                    </HStack>
                </Container>
            </Box>
        </Box>
    )
}

export default Navbar