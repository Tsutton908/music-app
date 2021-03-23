import React from 'react';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { useDataLayerValue } from '../DataLayer';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import '../styles/SongRow.css';

function SongRow({ track, playSong, setHome, spotify, playlistId, item }) {
    const [{ user, playlists }, dispatch] = useDataLayerValue();

    //console.log(item)

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

    const removeSong = (playlist, id, item) => {
        spotify.removeTracksFromPlaylist(playlist, [{ uri : `spotify:track:${id}`, positions: [item] }]).then((response) => {
            console.log(response)
        })
    }

    const testing = (item, id) => {
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
                console.log(track.id)
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
                        const trackLocation = testing(item, track.id);
                        removeSong(playlistId, track.id, trackLocation)
                        //testing(item, track.id)
                    }}
                />
            </div>
        </div>
    )
}

export default SongRow
