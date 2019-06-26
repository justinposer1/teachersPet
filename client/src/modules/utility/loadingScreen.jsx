
import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

const LoadingScreen = (props) => {
    return (
        <Dimmer active={props.active} page>
            <Loader size='massive' inline='centered'> {props.message} </Loader>
        </Dimmer>
    )
};

export default LoadingScreen;