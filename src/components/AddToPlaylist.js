import React from 'react';

import { useDataLayerValue } from '../DataLayer';
import CloseIcon from '@material-ui/icons/Close';

import '../styles/AddToPlaylist.css';

function AddToPlaylist({ showModal, closeModal, spotify }) {
    const [{ playlists, songToAdd }, dispatch] = useDataLayerValue();

    const addToPlaylist = (playlist) => {
        spotify.addTracksToPlaylist(playlist.id, [`spotify:track:${songToAdd}`], {'uris': [`spotify:track:${songToAdd}`]}).then((response) => {
            console.log(response)
        })
    }
    
    return (
        <>
        {showModal ? (
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
