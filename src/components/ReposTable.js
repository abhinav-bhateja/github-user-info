import {
    Button,
    Heading,
    IconButton,
    Link,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tooltip,
    Tr
} from "@chakra-ui/react";
import {VscGitCommit} from "react-icons/vsc";
import {FaExternalLinkAlt} from "react-icons/fa";
import {useEffect, useState} from "react";
import {useUser} from "../useUser";
import {fetchCommitsByRepo} from "../lib/data";

const ReposTable = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentRepos, setCurrentRepos] = useState([]);
    const {repos, userId, setCommits} = useUser();

    const handlePageChange = (page) => {
        setCurrentRepos(repos.slice(page * 3, page * 3 + 3));
        setCurrentPage(page);
    };

    useEffect(() => {
        setCurrentPage(1);
        setCurrentRepos(repos.slice(0, 3));
    }, [repos]);

    if (repos.length === 0) {
        return (
            <>
            </>
        )
    }

    return (
        <>
            <Heading>List of Repos</Heading>
            <TableContainer w="full" border="1px solid" borderColor="gray.200" rounded="lg" mt={4}>
                <Table variant="simple">
                    <Thead bg="gray.50">
                        <Tr>
                            <Th>Name</Th>
                            <Th>Author</Th>
                            <Th>Link</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentRepos.map((repo) => (
                            <Tr key={repo._id}>
                                <Td>
                                    {repo._id}
                                </Td>
                                <Td>
                                    {userId}
                                </Td>
                                <Td>
                                    <Tooltip label="Fetch commits">

                                        <IconButton
                                            variant="ghost"
                                            icon={<VscGitCommit/>}
                                            onClick={async () => {
                                                const commits = await fetchCommitsByRepo(userId, repo._id);
                                                setCommits(commits);
                                            }}
                                        />
                                    </Tooltip>
                                    <Tooltip label="Go to GitHub.com">
                                        <Link href={repo.html_url} target="_blank">
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
                                    disabled={currentPage === Math.ceil(repos.length / 3 - 1)}
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

export default ReposTable;