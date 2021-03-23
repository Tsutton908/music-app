import React from 'react';

import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import Home from './Home';
import { useDataLayerValue } from '../DataLayer';
import AddToPlaylist from './AddToPlaylist';

import '../styles/Player.css';

function Player({ spotify }) {

    const [{ home, addSongToPlaylist }, dispatch] = useDataLayerValue();

    const closeModal = () => {
        dispatch({
            type: 'SET_ADDSONGTOPLAYLIST',
            addSongToPlaylist: false,
        })
    }

    return (
        <div className="player">
            <div className="player__body">
                <Sidebar spotify={spotify}/>

                <AddToPlaylist showModal={addSongToPlaylist} closeModal={closeModal} spotify={spotify} closeModal={closeModal}/>

                {home ? (

                    <Home spotify={spotify}/>
                ) : (
                    <Body spotify={spotify}/>
                )}
            </div>
        
            <Footer spotify={spotify}/>
        </div>
    )
}

export default Player
