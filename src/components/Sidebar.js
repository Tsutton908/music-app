import React from 'react';

import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';

import '../styles/Sidebar.css';

function Sidebar() {

    const [{ playlists, home, song, token, spotify }, dispatch] = useDataLayerValue();

    console.log(playlists)

    const setActivePlaylist = (id) => {
            spotify.getPlaylist(id).then(response => {
                dispatch({
                  type: 'SET_DISCOVER_WEEKLY',
                  discover_weekly: response,
                })
              })
    }

    /*function backgroundColor () {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);

            dispatch({
                type: 'SET_RANDOM_COLOR',
                randomColor: randomColor,
            })
        }  */
    

    return (
        <div className="sidebar">
            <img 
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="" 
                className="sidebar__logo"
            />
            <SidebarOption title='Home' Icon={HomeIcon}/>
            <SidebarOption title='Search' Icon={SearchIcon}/>

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} setActivePlaylist={setActivePlaylist} playlist={playlist} />
            ))}
        </div>
    )
}

export default Sidebar
