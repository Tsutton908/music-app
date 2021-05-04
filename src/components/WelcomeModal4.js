import React from 'react';

import { useDataLayerValue } from '../DataLayer';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import '../styles/WelcomeModal4.css'

function WelcomeModal4({ showModal, closeModal }) {
    const [{ playlists, songToAdd, spotify, welcomeModal4 }, dispatch] = useDataLayerValue();

    return (
        <>
        {
            //only want the modal to show when the modal state in the reducer has been changed to be True
        welcomeModal4 ? (
            <div className="welcomeModal4">
                <div className="welcomeModal4__arrow"></div>
                <div className="welcomeModal4__box">
                

                    <h2>Github Page</h2>
                    <hr />

                    <br />
                    <h3>
                    If you have anymore questions regarding this project or are interested in looking at the code, please feel free to take a look at my Github repository for the project.
                    </h3>
                    <div className="welcomeModal4__continue">
                        <a className="end__button" onClick={() => {
                            dispatch({
                                type: 'SET_WELCOME_MODAL_4',
                                welcomeModal4: false,
                            })
                        }}>
                            End Tour
                            <ArrowForwardIosIcon className="continue__icon"/>
                        </a>
                    </div>
                </div>
                <div className="welcomeModal4_close_icon">
                        <CloseIcon onClick={() => {
                            closeModal()
                        }}/>
                </div>
            </div>
        ) : null}
        </>
    )
}

export default WelcomeModal4
