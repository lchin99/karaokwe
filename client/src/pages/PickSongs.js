import React from 'react';
import styled from "styled-components";
import TinderCard from 'react-tinder-card'
import { Link } from "react-router-dom";
import { Button } from "../components/Base/basecomponents";

const PickSongs = (props) => {
    const roomCode = props.location.state.roomCode;
    const likedSongs = [];

    const swiped = (direction, song_id) => {
        if (direction === "right") {
            likedSongs.push(song_id);
        }
    }

    return <PickSongsWrapper>
        <H1White>Room Code: {roomCode}</H1White>
        <CardWrapper>
            <div className='cardContainer'>
            {getAllSongs(roomCode).map((song) =>
                <TinderCard className='swipe' key={song.song_id} onSwipe={(dir) => swiped(dir, song.song_id)}>
                <TextCard song={song} />
                </TinderCard>
            )}
            <Link to={{
                pathname: '/final',
                state: { roomCode }
            }}>
                <Button>Results</Button>
            </Link>
            </div>
        </CardWrapper>
    </PickSongsWrapper>
}

const TextCard = ({ song }) => {
    return <div className='card'>
        <h2>{song.song}</h2>
        <h4>Artist: {song.artist} <br /> Released: {song.year} </h4>
        <h4>Languages: {song.languages.map(language => language.language_name).join(", ")}</h4>
        <h4>Genres: {song.types.map(type => type.type_name).join(", ")}</h4>
    </div>
}

const getAllSongs = (roomCode) => {
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

const CardWrapper = styled.div``;
const PickSongsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
const H1White = styled.h1`
    color: white;
`;

export default PickSongs