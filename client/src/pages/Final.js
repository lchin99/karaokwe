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
                {getGroupSongs().map(row => (
                    <TableRow key={row.song}>
                    <TableCell component="th" scope="row">
                        {row.song_id}
                    </TableCell>
                    <TableCell>{row.song}</TableCell>
                    <TableCell>{row.artist}</TableCell>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.languages.map(language => language.language_name).join(", ")}</TableCell>
                    <TableCell>{row.types.map(type => type.type_name).join(", ")}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>  
        </InnerWrapper>    
    </FinalWrapper>
}

const getGroupSongs = () => {
    return [
        {
          song_id: 27085,
          song: "Lights Up",
          artist: "Harry Styles",
          year: 2019,
          explicit: false,
          languages: [
            {
              language_id: 2,
              language_name: "English",
              hasLanguage: {
                song_id: 27085,
                language_id: 2
              }
            },
            {
                language_id: 2,
                language_name: "English",
                hasLanguage: {
                  song_id: 27085,
                  language_id: 2
                }
              },
              {
                language_id: 2,
                language_name: "English",
                hasLanguage: {
                  song_id: 27085,
                  language_id: 2
                }
              },
          ],
          types: [
            {
              type_id: 33,
              type_name: "Alternative",
              hasType: {
                song_id: 27085,
                type_id: 33
              }
            }
          ]
        },
        {
          song_id: 27440,
          song: "Cinnamon Girl",
          artist: "Lana Del Rey",
          year: 2019,
          explicit: false,
          languages: [
            {
              language_id: 2,
              language_name: "English",
              hasLanguage: {
                song_id: 27440,
                language_id: 2
              }
            }
          ],
          types: [
            {
              type_id: 33,
              type_name: "Alternative",
              hasType: {
                song_id: 27440,
                type_id: 33
              }
            }
          ]
        }
      ];
}

const FinalWrapper = styled(Wrapper)``;
const InnerWrapper = styled.div`
    width: 75%;
`;

export default Final