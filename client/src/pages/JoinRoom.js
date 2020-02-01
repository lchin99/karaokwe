import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Button } from "../components/Base/basecomponents";

const JoinRoom = () => {
    return <div>
        <p>JOIN ROOM PAGE</p>
        <Link to="/pick">
          <Button>Pick</Button>
        </Link>
    </div>
}

export default JoinRoom