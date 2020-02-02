import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../components/Base/basecomponents";

const CreateRoom = () => {
    return <CreateRoomWrapper>
        <Card>
            <h2>Room Code: {getRoomCode()}</h2>
            <Link to="/pick">
                <Button>Start Swiping</Button>
            </Link>
        </Card>
    </CreateRoomWrapper>
}

const getRoomCode = () => {
    return "zVyE2";
}

const CreateRoomWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Card = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

export default CreateRoom