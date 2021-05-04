import React from 'react';

import { useDataLayerValue } from '../DataLayer';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import '../styles/WelcomeModal2.css'

function WelcomeModal2({ showModal, closeModal }) {
    const [{ playlists, songToAdd, spotify, welcomeModal2 }, dispatch] = useDataLayerValue();

    return (
        <>
        {
            //only want the modal to show when the modal state in the reducer has been changed to be True
        welcomeModal2 ? (
            <div className="welcomeModal2">
                <div className="welcomeModal2__arrow"></div>
                <div className="welcomeModal2__box">
                

                    <h2>Playlists</h2>
                    <hr />

                    <br />
                    <h3>
                    Here is where your presonal Spotify playlists will appear. You can click to navigate the each playlist and view the tracks you have saved within them.
                    </h3>
                    <br />
                    <h4 className="welcomeModal2__notice">
                    Notice: Some playlists that have been set to "private" may not be available due to restrictions from the Spotify api
                    </h4>
                    
                    <div className="welcomeModal2__continue">
                        <a className="continue__button" onClick={() => {
                            dispatch({
                                type: 'SET_WELCOME_MODAL_2',
                                welcomeModal2: false,
                            })

                            dispatch({
                                type: 'SET_WELCOME_MODAL_3',
                                welcomeModal3: true,
                            })
                        }}>
                            Continue with Tour
                            <ArrowForwardIosIcon className="continue__icon"/>
                        </a>
                    </div>
                </div>
                <div className="welcomeModal2_close_icon">
                        <CloseIcon onClick={() => {
                            closeModal()
                        }}/>
                </div>
            </div>
        ) : null}
        </>
    )
}

export default WelcomeModal2
