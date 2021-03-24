import React from 'react';
import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './components/Login';
import { getTokenFromUrl } from './config/spotify';
import Player from './components/Player'; 
import { useDataLayerValue } from './DataLayer';

import './App.css';

//spotify package to allow access to the spotify api and user content
const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token, topTracks }, dispatch] = useDataLayerValue();

  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    //stores the token in an external storage for safe use inside the app
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      //gets the user associated with the logged in token
      spotify.getMe().then(user => {
        
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: 'SET_PLAYLIST',
        playlists: playlists,
      })
    })

    
    spotify.getPlaylist('60vUcvSmx6gubMzTMlMXW1').then(response => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
      })
    })

    spotify.getMyTopArtists().then((topArtists) => {
      dispatch({
        type: 'SET_TOP_ARTISTS',
        topArtists: topArtists,
      })
    })

    spotify.getMyTopTracks().then((topTracks) => {
      dispatch({
        type: 'SET_TOP_TRACKS',
        topTracks: topTracks,
      })
    })

    spotify.getMyDevices().then((devices) => {
      let availableDevices = devices.data;
      dispatch({
        type: 'SET_DEVICES',
        devices: devices,
      })
    })

    spotify.getMyRecentlyPlayedTracks().then((initialSong) => {
      let song = initialSong.items[0].track.uri.slice(14);
      dispatch({
        type: 'SET_SONG',
        song: song,
      })
    })

    spotify.getNewReleases().then((newReleases) => {
      dispatch({
        type: 'SET_NEW_RELEASES',
        newReleases: newReleases,
      })
    })

    if (randomColor) {
      dispatch({
        type: 'SET_RANDOM_COLOR',
        randomColor: randomColor,
      })
    }

  }, [token, dispatch ]);

  

  return (
    <div className="app">
      {
        //if the user is logged in the rest of the app will be showed, otherwise redirects to the login screen
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
