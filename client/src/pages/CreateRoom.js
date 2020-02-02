import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import { Button, Card, Wrapper } from "../components/Base/basecomponents";

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "50%",
      maxWidth: 300
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: 2
    },
    noLabel: {
      marginTop: theme.spacing(3)
    }
}));

const CreateRoom = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState([1000, 2020]);
    const [genres, setGenres] = React.useState([]);
    const [languages, setLanguages] = React.useState([]);
    const handleYearChange = (e, newValue) => {
        setValue(newValue);
    };
    const handleGenreChange = event => {
        setGenres(event.target.value);
    };
    const handleLanguageChange = event => {
        setLanguages(event.target.value);
    };

    return <CreateRoomWrapper>
        <Card>
            <h2>Room Code: {getRoomCode()}</h2>
            <h3>Set Parameters!</h3>
            <h4>Years: {value[0]} - {value[1]}</h4>
            <SliderWrapper>
                <Slider
                    value={value}
                    onChange={handleYearChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={() => value}
                    max={2020}
                    min={1000}
                    step={10}
                />
            </SliderWrapper>
            <h4>Genres</h4>
            <FormControl className={classes.formControl}>
                <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    value={genres}
                    onChange={handleGenreChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={selected => (
                        <div className={classes.chips}>
                        {selected.map(value => (
                            <Chip key={value} label={value} />
                        ))}
                        </div>
                    )}
                    >
                    {getGenres().map(genre => (
                        <MenuItem
                        key={genre}
                        value={genre}
                        >
                        {genre}
                        </MenuItem>
                    ))}
                    </Select>
            </FormControl>
            <h4>Languages</h4>
            <FormControl className={classes.formControl}>
                <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    value={languages}
                    onChange={handleLanguageChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={selected => (
                        <div className={classes.chips}>
                        {selected.map(value => (
                            <Chip key={value} label={value} />
                        ))}
                        </div>
                    )}
                    >
                    {getLanguages().map(language => (
                        <MenuItem
                        key={language}
                        value={language}
                        >
                        {language}
                        </MenuItem>
                    ))}
                    </Select>
            </FormControl>
            
            <Link to={{
                pathname: '/pick',
                state: {
                    roomCode: getRoomCode()
                }
            }}>
                <Button>Start Swiping</Button>
            </Link>
            
        </Card>
    </CreateRoomWrapper>
}

const getRoomCode = () => {
    return "zVyE2";
}

const getGenres = () => {
    return [
        "Kids",
        "Traditionnal",
        "Christmas",
        "Christian",
        "Gospel",
        "Celtic",
        "Latin",
        "Blues",
        "Rock",
        "Duet",
        "Jazz",
        "Oldies",
        "Classical",
        "Country",
        "French pop",
        "Musical",
        "TV & movie soundtrack",
        "Musette",
        "Pop",
        "Humour",
        "Schlager",
        "Love",
        "Folk",
        "Rock 'n Roll",
        "Soft rock",
        "Soul",
        "Zouk/Creole",
        "Oriental",
        "World/Folk",
        "Reggae",
        "Funk",
        "Disco",
        "Alternative",
        "Hard/Metal",
        "Teen pop",
        "Ska",
        "80s",
        "Punk/Grunge",
        "Dance",
        "Electro",
        "Rap",
        "R&B",
    ];
}

const getLanguages = () => {
    return [
        "French",
        "English",
        "Spanish",
        "Dutch",
        "German",
        "Italian",
        "Latin",
        "Finnish",
        "Portuguese",
        "Instrumental",
        "Arab",
        "Other",
        "Japanese",
        "Russian",
        "Creole",
        "Polish",
        "Hebrew",
        "Corsican",
        "Hindi",
        "Turkish",
        "Korean",
        "Danish"
    ];
}

const CreateRoomWrapper = styled(Wrapper)`
`;

const SliderWrapper = styled.div`
    width: 50%;
`;

export default CreateRoom