import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

import Header from './Header';
import { useDataLayerValue } from '../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

import '../styles/Body.css';

function Body({ spotify }) {

    const [{ discover_weekly, randomColor, devices, token }, dispatch] = useDataLayerValue();

    /*const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:60vUcvSmx6gubMzTMlMXW1`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
      */
      /*const playPlaylist = (id) => {
        spotify.getMyDevices().then((data) {
          let availableDevices = data.body.devices;
          console.log(availableDevices);
        }, function(err) {
          console.log('Something went wrong!', err);
        });
      };
      */

    console.log(discover_weekly)

    /*
    const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((response) => {
              dispatch({
                type: "SET_SONG",
                song: response.song,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
      */
     const playSong = (id) => {
       console.log(id);
      dispatch({
        type: 'SET_SONG',
        song: id,
      })
     };

    return (
        <div 
          className="body"
          style={{background: `linear-gradient(#${randomColor}, rgba(0, 0, 0, 1))`}}
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
                        <PlayCircleFilledIcon className="body__shuffle"/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} playSong={playSong} spotify={spotify} playlistId={discover_weekly.id} item={discover_weekly.tracks.items}/>
                ))}
            </div>
        </div>
    )
}

export default Body
