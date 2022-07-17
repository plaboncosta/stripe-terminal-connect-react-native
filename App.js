import React, {useEffect, useState} from 'react';
import axios from "axios";
import {StripeTerminalProvider} from '@stripe/stripe-terminal-react-native';
import {
    View,
    Text
} from 'react-native';

import HomeScreen from './HomeScreen';

const BASE_API_URL = 'https://whispering-garden-77763.herokuapp.com'

const App = () => {
    const [connectionToken, setConnectionToken] = useState('');

    const fetchTokenProvider = async () => {
        try {
            const response = await axios.post(`${BASE_API_URL}/connection_token`);
            return response.data['secret'];
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchTokenProvider()
            .then(res => setConnectionToken(res));
    }, []);

    return (
        connectionToken ? <StripeTerminalProvider
            tokenProvider={connectionToken}
            logLevel="verbose"
        >
            <HomeScreen/>
        </StripeTerminalProvider> : <Text style={{paddingTop: 20, paddingLeft: 20}}>Loading...</Text>
    );
};

export default App;
