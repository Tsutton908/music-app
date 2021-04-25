import React from 'react';

import Header from './Header';
import { useDataLayerValue } from '../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

import '../styles/Body.css';

function Body() {

    const [{ discover_weekly, randomColor, spotify, playingPlaylist }, dispatch] = useDataLayerValue();

    //pushes the currently playing song to the reducer data layer
     const playSong = (id) => {
      dispatch({
        type: 'SET_SONG',
        song: id,
      })
     };

     //changes the state of the play button for the current playlist
     const playButton = (bool) => (
      dispatch({
        type: 'SET_PLAYING_PLAYLIST',
        playingPlaylist: bool,
      })
     );

    return (
        <div 
          className="body"
        >
          <div 
            className="body_background_color"
            style={{background: `linear-gradient(170deg,  #${randomColor} -30%, rgba(26, 26, 26, 1) 40%)`}}
          >
            <Header />

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                  { playingPlaylist ?
                    <PlayCircleFilledIcon className="body__shuffle" onClick={() => {
                      playSong(discover_weekly.tracks.items.[0].track.id);
                      playButton(false);
                    }}
                    /> : <PauseCircleFilledIcon className="body__shuffle active" onClick={() => {
                      playButton(true);
                    }}
                    />
                  }
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} playSong={playSong} spotify={spotify} playlistId={discover_weekly.id} item={discover_weekly.tracks.items}/>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Body
