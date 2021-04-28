import React from 'react';

//SpotifyPlayer is a third party react-based spotify playback player.
//source to the SpotifyPlayer is https://github.com/gilbarbara/react-spotify-web-playback#readme
import SpotifyPlayer from 'react-spotify-web-playback';
import { useDataLayerValue } from '../DataLayer';

import '../styles/Footer.css';

function Footer() {

    const [{ token, song, randomColor, playing }] = useDataLayerValue();

    return (
        <div className="footer">
            <SpotifyPlayer
                token={token}
                uris={[`spotify:track:${song}`]}
                styles={{
                  bgColor: 'transparent',
                  color: 'white',
                  sliderColor: `#${randomColor}`,
                  trackNameColor: 'white',
                  sliderTrackColor: 'gray',
                  height: '88px',
                  sliderHandleColor: 'white',
                  sliderHeight: '5px',
                  sliderTrackBorderRadius: '20px',
                }}
                autoPlay={playing}
                play={playing}
            />
        </div>
    )
}

export default Footer
