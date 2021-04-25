import React from 'react';

import '../styles/TopAlbumRow.css';

function TopAlbumRow({ artist }) {
    return (
        <div className="topAlbumRow">
        <img 
            src={artist.images[0].url} 
            alt="" 
            className="topAlbumRow__img"
        />
        <div className="topAlbumRow__info">
            <h1>{artist.name}</h1>

            {artist?.genres?.slice(0,2).map((genres) => (
                    <p>
                        {genres}
                    </p>
                ))}
        </div>
    </div>
    )
}

export default TopAlbumRow
