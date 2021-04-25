import React from 'react';
import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './components/Login';
import { getTokenFromUrl } from './config/spotify';
import Player from './components/Player'; 
import { useDataLayerValue } from './DataLayer';

import './App.css';

//spotify package to allow access to the spotify api and user content
const spotify = new SpotifyWebApi();

function App() {

  const [{ token }, dispatch] = useDataLayerValue();

  //constant set at the beginning of loaded page to update the background color to be randomly selected
  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    //stores the token in an external storage for safe use inside the app
    const _token = hash.access_token;

    if (_token) {
      //sets the token as constant state variable in the redux reducer
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      //gets the user associated with the logged in token
      spotify.getMe().then(user => {
        //pushes the user's account id to the redux reducer's 'user' variable
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }

    //gets the loggged in user's saved playlists 
    spotify.getUserPlaylists().then((playlists) => {
      //pushes the user's playlist object to the redux reducer's 'playlists' array variable
      dispatch({
        type: 'SET_PLAYLIST',
        playlists: playlists,
      })
    })

    //gets and returns object for the current logged in user's top 10 listened to artist's
    spotify.getMyTopArtists().then((topArtists) => {
      //pushes the user's top artist's object to the redux reducer's 'topArtists' array variable
      dispatch({
        type: 'SET_TOP_ARTISTS',
        topArtists: topArtists,
      })
    })

    //get and returns object conatining current user's top 25 listened to tracks
    spotify.getMyTopTracks().then((topTracks) => {
      //pushes the user's top tracks object to the redux reducer's 'topTracks' array variable
      dispatch({
        type: 'SET_TOP_TRACKS',
        topTracks: topTracks,
      })
    })

    //gets and returns the user's recently played tracks 
    spotify.getMyRecentlyPlayedTracks().then((initialSong) => {
      //only the last track is desired, so song is initialized with only the last played track by the user
      //this is only for the player to be able to play recent track without a track having to be selected
      let song = initialSong.items[0].track.uri.slice(14);
      //pushes the user's recently played track to the redux reducer's 'song' variable
      //sets the player's currently playing song.
      dispatch({
        type: 'SET_SONG',
        song: song,
      })
    })

    //gets and returns spotify's suggested new realeases object 
    spotify.getNewReleases().then((newReleases) => {
      //pushes spotify's new releases to the redux reducer's 'newReleases' variable
      dispatch({
        type: 'SET_NEW_RELEASES',
        newReleases: newReleases,
      })
    })

    //pushes the random color initialized before to the redux reducers 'randomColor' variable 
    //this is done so that the color can be changed anytime the state is changed and can be accessed through other components
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
