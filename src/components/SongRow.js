import React from 'react';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { useDataLayerValue } from '../DataLayer';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import '../styles/SongRow.css';

function SongRow({ track, playSong, setHome, spotify, playlistId, item }) {
    const [{ }, dispatch] = useDataLayerValue();

    //function to operate modal when adding song to playlist
    const openAddSongModal = (id) => {
        dispatch({
            type: 'SET_ADDSONGTOPLAYLIST',
            addSongToPlaylist: true,
        })

        dispatch({
            type: 'SET_SONG_TO_ADD',
            songToAdd: track.id
        })
    }

    //function to remove selected track from a user's playlist
    const removeSong = (playlist, id, item) => {
        spotify.removeTracksFromPlaylist(playlist, [{ uri : `spotify:track:${id}`, positions: [item] }]).then((response) => {
        })
    }

    //function tracks the selected song's location in the playlist / array in order to select its atributes
    const trackId = (item, id) => {
        var i;
        for(i = 0; i < item.length; i++){
            if(item[i].track.id === `${id}`){
                console.log(i)
                return i;
            }
        }
    }

    return (
        <div className="songRow" onClick={() => {
                playSong(track.id)
                }}>
            <div className="songRow__left">
                <img 
                    src={track.album.images[0].url} 
                    alt="" 
                    className="songRow__album"
                />
                <div className="songRow__info">
                    <h1>{track.name}</h1>
                    <p>
                        {track.artists.map((artist) => artist.name).join(", ")} - {" "}
                        {track.album.name}
                    </p>
                </div>
                <div className="explicit">
                    {track.explicit ? (
                        <p style={{marginLeft: '30px', color: 'gray'}}>Explicit</p>
                    ): (
                        <div></div>
                    )}
                </div>
            </div>
            <div className="songRow__change">
                <PlaylistAddIcon 
                    onClick={() => {
                        openAddSongModal(track.id)
                    }}
                    className="playlistAddIcon"
                />
                <RemoveCircleOutlineIcon 
                    className="removeSong"
                    onClick={() => {
                        const trackLocation = trackId(item, track.id);
                        removeSong(playlistId, track.id, trackLocation)
                    }}
                />
            </div>
        </div>
    )
}

export default SongRow
