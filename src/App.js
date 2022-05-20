import {
    Box,
    Container,
    Flex
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ReposTable from "./components/ReposTable";
import CommitsTable from "./components/CommitsTable";

function App() {
    return (
        <Box>
            <Navbar/>
            <Container my={{base: '8', lg: '16'}} maxW="3xl">
                <Card/>
            </Container>
            <Container maxW="4xl">
                <Flex align="center" direction="column" my={10}>
                    <ReposTable/>
                </Flex>
                <Flex align="center" direction="column" my={10}>
                    <CommitsTable/>
                </Flex>
            </Container>
        </Box>
    );
}

export default App;
