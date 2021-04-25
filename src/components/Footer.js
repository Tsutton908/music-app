import React from 'react';
import { useEffect } from 'react';

import SpotifyPlayer from 'react-spotify-web-playback';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import '../styles/Footer.css';
import { useDataLayerValue } from '../DataLayer';

function Footer() {

    const [{ token, song, playing, randomColor, spotify }, dispatch] = useDataLayerValue();


      const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
      };

    return (
        <div className="footer">
            <SpotifyPlayer
                token={token}
                uris={[`spotify:track:${song}`]}
                styles={{
                  bgColor: 'transparent',
                  color: 'white',
                  sliderColor: `#${randomColor}`,
                  trackNameColor: 'white',
                  sliderTrackColor: 'gray',
                  height: '88px',
                  sliderHandleColor: 'white',
                  sliderHeight: '5px',
                  sliderTrackBorderRadius: '20px',
                }}
            />
        </div>
    )
}

export default Footer
