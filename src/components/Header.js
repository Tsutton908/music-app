import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../DataLayer';

import '../styles/Header.css';

function Header() {

    const [{ user }, dispatch] = useDataLayerValue();

    const openNonFunctionalModal = () => {
        dispatch({
            type: 'SET_NONFUNCTIONAL_MODAL',
            nonFunctionalModal: true,
        })
    }
    

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input 
                    placeholder="Search for Artists, Songs, or Podcasts"
                    type="text"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            openNonFunctionalModal()
                        }
                    }}
                />
            </div>
            <a className="header__right"
                onClick={() => {
                    openNonFunctionalModal()
                }}
            >
                    <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                    <h4>{user?.display_name}</h4>
            </a>
        </div>
    )
}

export default Header
