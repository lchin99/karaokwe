import React from 'react';
import styled from "styled-components";
import TinderCard from 'react-tinder-card'
import { Wrapper } from "../components/Base/basecomponents";

const PickSongs = () => {
    const likedSongs = [];
    const swiped = (direction, song_id) => {
        if (direction === "right") {
            likedSongs.push(song_id);
        }
    }

    return <Wrapper>
        <CardWrapper>
            <div className='cardContainer'>
            {getAllSongs().map((song) =>
                <TinderCard className='swipe' key={song.song_id} onSwipe={(dir) => swiped(dir, song.song_id)}>
                <TextCard song={song} />
                </TinderCard>
            )}
            </div>
        </CardWrapper>
    </Wrapper>
}

const TextCard = ({ song }) => {
    return <div className='card'>
        <h2>{song.song}</h2>
        <h4>Artist: {song.artist} <br /> Released: {song.year} </h4>
        <h4>Languages: {song.languages.map(language => language.language_name).join(", ")}</h4>
    </div>
}

const getAllSongs = () => {
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

export default PickSongs