import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider} from '@chakra-ui/react'
import {UserProvider} from "./useUser";

import theme from "./theme";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ChakraProvider theme={theme}>
        <UserProvider>
            <App/>
        </UserProvider>
    </ChakraProvider>
);