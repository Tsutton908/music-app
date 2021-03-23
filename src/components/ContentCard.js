import React from 'react';

import '../styles/ContentCard.css';

function ContentCard({content, playSong}) {

    return (
        <div className="mainContent__card" onClick={() => {
            console.log(content.id)
            }}>
            <img 
                src={content.images[0].url} 
                alt="" 
                className="mainContent__img"
            />
            
            <div className="mainContent__info">
                <h3>{content.name}</h3>

                <p>{content.release_date}</p>
            </div>
        </div>
    )
}

export default ContentCard
