import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { Wrapper } from "../components/Base/basecomponents"

const Final = (props) => {
    const roomCode = props.location.state.roomCode;
    return <FinalWrapper>
        <InnerWrapper>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Artist</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Languages</TableCell>
                    <TableCell>Genres</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {/* {rows.map(row => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))} */}
                </TableBody>
            </Table>
        </TableContainer>  
        </InnerWrapper>    
    </FinalWrapper>
}

const FinalWrapper = styled(Wrapper)``;
const InnerWrapper = styled.div`
    width: 75%;
`;

export default Final