import React, {useEffect} from 'react';
import {Text, View} from "react-native";

import {useStripeTerminal} from "@stripe/stripe-terminal-react-native";

const HomeScreen = () => {
    const {initialize} = useStripeTerminal();

    /*useEffect(() => {
        initialize({
            logLevel: 'verbose',
        }).then(r => console.log(r));
    }, [initialize]);*/

    return (
        <View>
            <Text>Home Page</Text>
        </View>
    );
};

export default HomeScreen;
