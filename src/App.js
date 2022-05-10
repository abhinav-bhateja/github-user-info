import {Box, Container} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
    return (
        <Box>
            <Navbar/>
            <Container mt={{base: '8', lg: '16'}}>
                <Search/>
            </Container>
        </Box>
    );
}

export default App;
