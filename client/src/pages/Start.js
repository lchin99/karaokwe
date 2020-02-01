import React from 'react';
import styled from "styled-components";
import { Button } from '../components/Base/basecomponents';
import { Link } from "react-router-dom";

const Start = () => {
    return <StartWrapper>
        <Link to="/create">
          <Button>Create a Room</Button>
        </Link>
        <Link to="/join">
          <Button>Join a Room</Button>
        </Link>
    </StartWrapper> 
}

const StartWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default Start