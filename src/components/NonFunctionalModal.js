import React from 'react';

import { useDataLayerValue } from '../DataLayer';
import CloseIcon from '@material-ui/icons/Close';

import '../styles/nonFunctionalModal.css';

//acts as modal for when user want to add a song to another playlist
function NonFunctionalModal({ showModal, closeModal }) {
    const [{ playlists, songToAdd, spotify, nonFunctionalModal }] = useDataLayerValue();

    return (
        <>
        {
            //only want the modal to show when the modal state in the reducer has been changed to be True
        nonFunctionalModal ? (
            <div className="nonFunctionalModal">
                <div className="nonFunctionalModal__box">
                

                    <h2>Sorry!</h2>
                    <hr />

                    <br />
                    <h3>I appreciate the interest, however this is just a demonstration of my technical abilities. I decided not to implement this feature.
                    </h3>
                    
                </div>
                <div className="modal_close_icon">
                        <CloseIcon onClick={() => {
                            closeModal()
                        }}/>
                </div>
            </div>
        ) : null}
        </>
    )
}

export default NonFunctionalModal
