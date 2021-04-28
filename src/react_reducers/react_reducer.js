export const initialState = {
    user: null,
    spotify: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    song: null,
    playing: false,
    home: true,
    topArtists: [],
    topTracks: [],
    randomColor: null,
    devices: null,
    addSongToPlaylist: false,
    songToAdd: null,
    newReleases: null,
    recommendations: null,
    playingPlaylist: true,
};

const reducer = (state, action) => {
    //action has a type and a payload

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case 'SET_SONG':
            return {
                ...state,
                song: action.song
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                topArtists: action.topArtists
            }
        case 'SET_HOME':
            return {
                ...state,
                home: action.home
            }
        case 'SET_TOP_TRACKS':
            return {
                ...state,
                topTracks: action.topTracks
            }
        case 'SET_RANDOM_COLOR':
            return {
                ...state,
                randomColor: action.randomColor
            }
        case 'SET_DEVICES':
            return {
                ...state,
                devices: action.devices
            }
        case 'SET_ADDSONGTOPLAYLIST':
            return {
                ...state,
                addSongToPlaylist: action.addSongToPlaylist
            }
        case 'SET_SONG_TO_ADD':
            return {
                ...state,
                songToAdd: action.songToAdd
            }
        case 'SET_NEW_RELEASES':
            return {
                ...state,
                newReleases: action.newReleases
            }
        case 'SET_RECOMMENDATIONS':
            return {
                ...state,
                recommendations: action.recommendations
            }
        case 'SET_NAVBAR_ACTIVE':
            return {
                ...state,
                navBar: action.navBar
            }
        case 'SET_PLAYING_PLAYLIST':
            return {
                ...state,
                playingPlaylist: action.playingPlaylist
            }
        default:
            return state;
    }
}

export default reducer;