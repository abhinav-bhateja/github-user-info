import {
    Box,
    Flex,
    chakra,
    Button,
    Tag,
    HStack,
    Text,
    Heading, Link
} from "@chakra-ui/react";
import {useUser} from "../useUser";
import {fetchReposByUser} from "../lib/data";

function Card() {
    const {userInfo, setRepos} = useUser()
    if (Object.keys(userInfo).length === 0) {
        return (
            <Flex
                w="full"
                direction="column"
                justifyContent="center"
            >
                <Box
                    mx="auto"
                    px={12}
                    py={16}
                    rounded="lg"
                    shadow="lg"
                    bg="white"
                    w="full"
                    maxW="4xl"
                    border="1px solid"
                    borderColor="gray.200"
                >
                    <Flex justifyContent="center" alignItems="center">
                        <Heading fontSize={18}>
                            Enter the username in the search bar above
                        </Heading>
                    </Flex>
                </Box>
            </Flex>
        )
    }

    return (
        <Flex
            w="full"
            direction="column"
            justifyContent="center"
        >
            <Box
                mx="auto"
                px={8}
                py={4}
                rounded="lg"
                shadow="lg"
                bg="white"
                w="full"
                maxW="xl"
                border="1px solid"
                borderColor="gray.200"
            >
                <Flex justifyContent="space-between" alignItems="center">
                    <Heading fontSize="2xl" color="gray.700" fontWeight="700">
                        {userInfo.name}
                    </Heading>
                    <Tag fontSize="sm" cursor="pointer">
                        <Link href={userInfo.html_url} isExternal>
                            <HStack>
                                <chakra.svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            width="24px" height="24px">
                                    <path
                                        d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
                                </chakra.svg>
                                <Text>
                                    {userInfo._id}
                                </Text>
                            </HStack>
                        </Link>
                    </Tag>
                </Flex>
                <Box justifyContent="space-between" alignItems="center" mt={4}>
                    <chakra.p mt={2} color="gray.600">
                        {userInfo.bio}
                    </chakra.p>
                </Box>
                <Flex justify="center" mt={4}>
                    <Button
                        variant="ghost"
                        fontSize="sm"
                        fontWeight="700"
                        colorScheme="purple"
                        color="accent"
                        onClick={async () => {
                            const repos = await fetchReposByUser(userInfo._id);
                            setRepos(repos);
                        }}
                    >
                        Fetch Repos
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Card;