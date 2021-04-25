import React from 'react';

import { useDataLayerValue } from '../DataLayer';

import '../styles/SidebarOption.css';

function SidebarOption({ title, Icon, playlist, setActivePlaylist }) {

    const [{ }, dispatch] = useDataLayerValue();

    //pushed the sthome state to the reducer data layer to determine whether the user want to naviagte to the home page or not
    function setHome (homeId) {

        dispatch({
            type: 'SET_HOME',
            home: homeId,
        })
    }

    //function to determine the randomly selected background color of the page
    function backgroundColor () {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);

        dispatch({
            type: 'SET_RANDOM_COLOR',
            randomColor: randomColor,
        })
    }


    return (
        <div 
            className="sidebarOption"
            onClick={() => (
                backgroundColor(), 
                Icon ? setHome(true) : (
                    setActivePlaylist(playlist.id),
                    setHome(false)
                    )
            )}
        >
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4 onClick={() => (
                setHome(true)
            )}>{title}</h4> : <p onClick={() => (
                setActivePlaylist(playlist.id),
                setHome(false)
            )}>{title}</p>}
        </div>
    )
}

export default SidebarOption
