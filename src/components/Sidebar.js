import React from 'react';

import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home'; 
import { useDataLayerValue } from '../DataLayer';

import '../styles/Sidebar.css';

function Sidebar() {

    //pulls playlists and spotify objects from reducer data layer
    const [{ playlists, spotify }, dispatch] = useDataLayerValue();

    //function when called sets the active playlist being shown in the body of the page; i.e when a playlist is selected the active playlist id is changed
    const setActivePlaylist = (id) => {
            spotify.getPlaylist(id).then(response => {
                dispatch({
                  type: 'SET_DISCOVER_WEEKLY',
                  discover_weekly: response,
                })
              })
    }

    return (
        <div className="sidebar">
            <img 
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="" 
                className="sidebar__logo"
            />
            <SidebarOption title='Home' Icon={HomeIcon}/>

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {
                //sorts through the returned playlist object to be able to load each individual playlist title on the sidebar
            playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} setActivePlaylist={setActivePlaylist} playlist={playlist} />
            ))}
        </div>
    )
}

export default Sidebar
