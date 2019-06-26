
import React from 'react';
import { Loader } from 'semantic-ui-react';

const LoadingScreen = (props) => <Loader size='massive' active inline='centered'> {props.message} </Loader>;

export default LoadingScreen;