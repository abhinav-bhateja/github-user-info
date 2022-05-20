import React, {useContext} from "react";

export const useUser = () => {
    const user = useContext(UserContext);
    return user;
};

export const UserContext = React.createContext({
    userId: "",
    setUserId: () => {
    },
    userInfo: {},
    setUserInfo: () => {
    },
    repos: [],
    setRepos: () => {
    },
    commits: [],
    setCommits: () => {
    },
});

export const UserProvider = ({children}) => {
    const [userId, setUserId] = React.useState("");
    const [userInfo, setUserInfo] = React.useState({});
    const [repos, setRepos] = React.useState([]);
    const [commits, setCommits] = React.useState([]);

    const user = {
        userId,
        setUserId,
        userInfo,
        setUserInfo,
        repos,
        setRepos,
        commits,
        setCommits,
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};
