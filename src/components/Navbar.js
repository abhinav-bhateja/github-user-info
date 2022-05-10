import React from "react";
import {Box, Container, Flex, Image} from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Box as="section">
            <Box as="nav" boxShadow="0 4px 10px 0 #0000001A">
                <Container maxW={{ base: 'full', lg: '1150px' }} py={{ base: '4', lg: '5' }}>
                    <Flex justify="center">
                        <Image width="50%" src="https://i.postimg.cc/tTNXYGB0/logo.png" />
                    </Flex>
                </Container>
            </Box>
        </Box>
    )
}

export default Navbar