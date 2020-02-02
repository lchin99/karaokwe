import React from 'react';
import styled from "styled-components";
import TinderCard from 'react-tinder-card'
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button } from "../components/Base/basecomponents";

const PickSongs = async (props) => {
    const roomCode = props.location.state.roomCode;
    const likedSongs = [];

    const swiped = (direction, song_id) => {
        if (direction === "right") {
            likedSongs.push(song_id);
        }
    }

    const [allSongs, setAllSongs] = React.useState([]);
    const handleAllSongs = (newSongs) => {
        setAllSongs(newSongs);
    };

    React.useEffect(() => {
        getAllSongs(roomCode);
    });

    const getAllSongs = async (groupId) => {
        const groupPreferences = await axios.get(`/groups/preferences?groupId=${groupId}`);
        console.log(groupPreferences.data);

        const params = {
            languages: groupPreferences.data.languages,
            types: groupPreferences.data.types,
            years: groupPreferences.data.years
        }

        const songs = await axios.get('/songs', { params });

        console.log(songs.data);
        return handleAllSongs(songs.data);
    }

    return <PickSongsWrapper>
        <H1White>Room Code: {roomCode}</H1White>
        <CardWrapper>
            <div className='cardContainer'>
                {allSongs.length > 0 ? <h1>hey</h1> : allSongs.map(song =>
                    <TinderCard className='swipe' key={song.song_id} onSwipe={(dir) => swiped(dir, song.song_id)}>
                        <TextCard song={song} />
                    </TinderCard>)}
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