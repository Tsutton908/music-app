import React from 'react';

import { useDataLayerValue } from '../DataLayer';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import '../styles/WelcomeModal3.css'

function WelcomeModal3({ showModal, closeModal }) {
    const [{ playlists, songToAdd, spotify, welcomeModal3 }, dispatch] = useDataLayerValue();

    return (
        <>
        {
            //only want the modal to show when the modal state in the reducer has been changed to be True
        welcomeModal3 ? (
            <div className="welcomeModal3">
                <div className="welcomeModal3__arrow"></div>
                <div className="welcomeModal3__box">
                

                    <h2>Track Player</h2>
                    <hr />

                    <br />
                    <h3>
                    This is the Spotify track player. Simply click on a track to begin playing a song in your browser.
                    </h3>
                    <br />
                    <h4 className="welcomeModal3__notice">
                    Notice: If player is set in "pause" mode, a track will not play immediatly afer being clicked on. in this case a track will need to be clicked, and then player will need ot be initiated by clicking the play button. This is due to a limitation set by the player.
                    </h4>
                    <br />
                    <h4 className="welcomeModal3__warning">
                    Player will not be visible to users with a non-premium Spotify account
                    </h4>
                    
                    <div className="welcomeModal3__continue">
                        <a className="continue__button" onClick={() => {
                            dispatch({
                                type: 'SET_WELCOME_MODAL_3',
                                welcomeModal3: false,
                            })

                            dispatch({
                                type: 'SET_WELCOME_MODAL_4',
                                welcomeModal4: true,
                            })
                        }}>
                            Continue with Tour
                            <ArrowForwardIosIcon className="continue__icon"/>
                        </a>
                    </div>
                </div>
                <div className="welcomeModal3_close_icon">
                        <CloseIcon onClick={() => {
                            closeModal()
                        }}/>
                </div>
            </div>
        ) : null}
        </>
    )
}

export default WelcomeModal3
