import React from 'react';

import { useDataLayerValue } from '../DataLayer';
import CloseIcon from '@material-ui/icons/Close';

import '../styles/AddToPlaylist.css';

//acts as modal for when user want to add a song to another playlist
function AddToPlaylist({ showModal, closeModal }) {
    const [{ playlists, songToAdd, spotify }] = useDataLayerValue();

    //function to be called by pushing track id to spotify api to add the track to the selected playlist
    const addToPlaylist = (playlist) => {
        spotify.addTracksToPlaylist(playlist.id, [`spotify:track:${songToAdd}`], {'uris': [`spotify:track:${songToAdd}`]})
    }
    
    return (
        <>
        {
            //only want the modal to show when the modal state in the reducer has been changed to be True
        showModal ? (
            <div className="addToPlaylistModal">
                <div className="addToPlaylistModal__box">
                

                    <h2>Add To a Playlist</h2>
                    
                    <hr />

                    {playlists?.items?.map((playlist) => (
                        <div 
                            className="addToPlaylistModal__playlists"
                            onClick={() => {
                                addToPlaylist(playlist)
                                closeModal()
                            }}
                        >
                            <img 
                                src={playlist.images[0].url} 
                                alt="" 
                                className="topAlbumRow__img"
                            />
                            <h3>{playlist.name}</h3>
                        </div>
                    ))}
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

export default AddToPlaylist
