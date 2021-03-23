import React from 'react';

import { useDataLayerValue } from '../DataLayer';

import '../styles/SidebarOption.css';

function SidebarOption({ title, Icon, playlist, setActivePlaylist }) {

    const [{ home }, dispatch] = useDataLayerValue();

    function setHome (homeId) {

        dispatch({
            type: 'SET_HOME',
            home: homeId,
        })
    }

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
            onClick={() => (backgroundColor())}
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
