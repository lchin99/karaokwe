import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { Button, Card, Wrapper } from "../components/Base/basecomponents";

const JoinRoom = () => {
  const [roomCode, setRoomCode] = React.useState("");

  const handleRoomCodeChange = event => {
    setRoomCode(event.target.value);
  }

  return <Wrapper>
      <Card>
        <TextFieldWrapper>
          <TextField required id="standard-required" label="Room Code" onChange={handleRoomCodeChange} />
        </TextFieldWrapper>
        <Link to="/pick">
          <Button>Start Swiping</Button>
        </Link>
      </Card>
    </Wrapper>
}

const TextFieldWrapper = styled.div`
  margin: 20px;
`;

export default JoinRoom