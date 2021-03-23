import React from 'react';

import Header from './Header';
import { useDataLayerValue } from '../DataLayer';
import SongRow from './SongRow';
import TopAlbumRow from './TopAlbumRow';
import ContentCard from './ContentCard';

import '../styles/Home.css';

function Home({ spotify }) {

    const [{ topArtists, topTracks, randomColor, newReleases }, dispatch] = useDataLayerValue();

    //const randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    const playSong = (id) => {
        console.log(id);
       dispatch({
         type: 'SET_SONG',
         song: id,
       })
      };
 

    console.log('top artists')
    console.log(topArtists)
    console.log('top tracks')
    console.log(topTracks)
    console.log('new releases')
    console.log(newReleases)

    return (
        <div 
            className="home" 
            style={{background: `linear-gradient(#${randomColor}, rgba(0, 0, 0, 1))`}}
        >
            <Header />

            <div className="home__mainContent">
                <h1>New Releases</h1>
                <div className="home__newReleases">
                    {newReleases?.albums.items?.slice(0,5).map((newReleases) => (
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
