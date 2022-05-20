import {
    Button, chakra,
    Heading,
    IconButton, Link,
    Table,
    TableContainer,
    Tbody,
    Td, Text,
    Tfoot,
    Th,
    Thead,
    Tooltip,
    Tr
} from "@chakra-ui/react";
import {FaExternalLinkAlt} from "react-icons/fa";
import {useEffect, useState} from "react";
import {useUser} from "../useUser";
import {VscGitCommit} from "react-icons/vsc";
import {fetchCommitsByRepo} from "../lib/data";

const CommitsTable = () => {
    const {commits} = useUser();
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCommits, setCurrentCommits] = useState([]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setCurrentCommits(commits.slice((page - 1) * 5, page * 5));
    };

    useEffect(() => {
        setCurrentPage(1);
        setCurrentCommits(commits.slice(0, 5));
    }, [commits]);


    if (commits.length === 0) {
        return (
            <>
            </>
        )
    }
    return (
        <>
            <Heading>
                List of Commits
            </Heading>
            <TableContainer w="full" border="1px solid" borderColor="gray.200" rounded="lg" mt={4}>
                <Table variant="simple" sx={{
                    tableLayout: "fixed",
                    width: "100%",
                }}>
                    <Thead bg="gray.50">
                        <Tr>
                            <Th>Committer</Th>
                            <Th>Message</Th>
                            <Th>Link</Th>
                        </Tr>
                    </Thead><Tbody>
                    {currentCommits.map((commit) => (
                        <Tr key={commit._id}>
                            <Td>
                                {commit.committer}
                                <Tooltip label="Go to User Page">
                                    <Link href={commit.committer_url} target="_blank">
                                        <IconButton
                                            variant="ghost"
                                            icon={
                                                <chakra.svg fill="#000000" xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            width="24px" height="24px">
                                                    <path
                                                        d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
                                                </chakra.svg>
                                            }
                                        />
                                    </Link>
                                </Tooltip>
                            </Td>
                            <Td>
                                <Text wordBreak="break-all" whiteSpace="normal">
                                    {commit.message.slice(0, 50) + "..."}
                                </Text>
                            </Td>
                            <Td>
                                <Tooltip label="Go to GitHub.com">
                                    <Link href={commit.html_url} target="_blank">
                                        <IconButton variant="ghost" icon={<FaExternalLinkAlt/>}/>
                                    </Link>
                                </Tooltip>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
                    <Tfoot>
                        <Tr>
                            <Td>
                                <Button
                                    variant="outline"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </Button>
                            </Td>
                            <Td/>
                            <Td display="flex" justifyContent="flex-end">
                                <Button
                                    variant="outline"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === Math.ceil(commits.length / 5 - 1)}
                                >
                                    Next
                                </Button>
                            </Td>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    )
}
export default CommitsTable;