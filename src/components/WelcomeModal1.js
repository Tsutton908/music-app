import React from 'react';

import { useDataLayerValue } from '../DataLayer';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import '../styles/WelcomeModal1.css'
function WelcomeModal1({ showModal, closeModal }) {
    const [{ playlists, songToAdd, spotify, welcomeModal1 }] = useDataLayerValue();

    return (
        <>
        {
            //only want the modal to show when the modal state in the reducer has been changed to be True
        welcomeModal1 ? (
            <div className="welcomeModal1">
                <div className="welcomeModal1__box">
                

                    <h2>WELCOME TO MY SPOTIFY CLONE PROJECT!</h2>
                    <hr />

                    <br />
                    <h3>
                    This project was created using the create-react-app CLI and the React Redux library. The app is meant to work in conjuction to an active spotify premium account.
                    </h3>
                    <br />
                    <h4>
                    This project was created by me mainly to teach myself full stack React development. Since the point of this project was not to make expectional UI/UX design choices, I chose to keep the majority of the design as in the official Spotify App. However overall design changes were made to the app such to not be a complete clone to the original. Since I am already an adivid Spotify user, I thought this project would be an interesting way to deploy my skills in a fun way.
                    </h4>
                    <br />
                    <h4 className="welcomeModal1__notice">
                    Notice: If you logged in using a non-premium spotify account, not all components will be usable.
                    </h4>
                    
                </div>
                <div className="welcomeModal1_close_icon">
                        <CloseIcon onClick={() => {
                            closeModal()
                        }}/>
                </div>
                <button>
                    Next
                    <ArrowForwardIosIcon />
                </button>
            </div>
        ) : null}
        </>
    )
}

export default WelcomeModal1
