import React from 'react';

import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import Home from './Home';
import { useDataLayerValue } from '../DataLayer';
import AddToPlaylist from './AddToPlaylist';

import '../styles/Player.css';

//Player acts as the main component being rendured when login / authentication is successful 

function Player() {

    const [{ home, addSongToPlaylist }, dispatch] = useDataLayerValue();

    //pushes the state of the modal that appears when a song is added to a user's playlist. state is pushed to the redux reducer's 'addSongToPlaylist' variable
    //acts as function to close the modal after either the user adds a track to a playlist or the 'exit' button is pushed.
    const closeModal = () => {
        dispatch({
            type: 'SET_ADDSONGTOPLAYLIST',
            addSongToPlaylist: false,
        })
    }

    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />

                <AddToPlaylist showModal={addSongToPlaylist} closeModal={closeModal}/>

                {
                //if home state in the reducer/dataLayer is active/true then the home component will be rendered, otherwise the body(containing the active playlist) will be rendered.
                home ? (

                    <Home />
                ) : (
                    <Body />
                )}
            </div>
        
            <Footer />
        </div>
    )
}

export default Player
