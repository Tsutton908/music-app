import React from 'react';

import Header from './Header';
import { useDataLayerValue } from '../DataLayer';
import SongRow from './SongRow';
import TopAlbumRow from './TopAlbumRow';
import ContentCard from './ContentCard';

import '../styles/Home.css';

function Home() {

    const [{ topArtists, topTracks, randomColor, newReleases }, dispatch] = useDataLayerValue();
    
    //function called to set the currently playing song to the reducer datalayer to be used in the player
    const playSong = (id) => {
       dispatch({
         type: 'SET_SONG',
         song: id,
       })
      };

    return (
        
        <div 
            className="home" 
            /*style={{background: `rgba(0, 0, 0, 1)`}}*/
            style={{background: `linear-gradient(170deg,  #${randomColor}, rgba(26, 26, 26, 1) 40%)`}}
        >
            <Header />

            <div className="home__mainContent">
                <h1>New Releases</h1>
                <div className="home__newReleases">
                    {newReleases?.albums.items?.slice(0,10).map((newReleases) => (
                        <ContentCard content={newReleases} playSong={playSong}/>
                    ))}
                </div>

            </div>

            <div className="home__topContent">
                <h1>Your Top 5 Artists</h1>
                <hr />
                {topArtists?.items?.slice(0,5).map((topArtists) => (
                    <TopAlbumRow artist={topArtists} />
                ))}


                <h1>Your Top 10 Tracks</h1>
                <hr />
                {topTracks?.items?.slice(0,10).map((topTracks) => (
                    <SongRow track={topTracks} playSong={playSong}/>
                ))}
            </div>
        </div>
    )
}

export default Home
