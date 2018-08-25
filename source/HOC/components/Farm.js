// Core
import React from 'react';

import { Container, Button, Heading, Message } from '../styled';
import { withState } from './withState';

const stateName = 'apples ';
const stateUpdaterName = '_yieldApples';

export default withState({
    stateName,
    stateValue:   1,
    stateUpdater: (state) => ({
        [stateName]: state[stateName] + 1,
    }),
    stateUpdaterName,
})((props) => {
    const applesJSX = Array(props[stateName]).fill(stateName);

    return (
        <Container>
            <Heading>Farm</Heading>
            <div>
                <Message>Harvest:</Message>
                <Message>{applesJSX}</Message>
            </div>
            <Button onClick = { props[stateUpdaterName] }>Harvest</Button>
        </Container>
    );
});
