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
    guest: false,
    nonFunctionalModal: false,
    welcomeModal1: true,
    welcomeModal2: false,
    welcomeModal3: false,
    welcomeModal4: false,
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
        case 'SET_GUEST':
            return {
                ...state,
                guest: action.guest
            }
        case 'SET_NONFUNCTIONAL_MODAL':
            return {
                ...state,
                nonFunctionalModal: action.nonFunctionalModal
            }
        case 'SET_WELCOME_MODAL_1':
            return {
                ...state,
                welcomeModal1: action.welcomeModal1
            }
        case 'SET_WELCOME_MODAL_2':
            return {
                ...state,
                welcomeModal2: action.welcomeModal2
            }
        case 'SET_WELCOME_MODAL_3':
            return {
                ...state,
                welcomeModal3: action.welcomeModal3
            }
        case 'SET_WELCOME_MODAL_4':
            return {
                ...state,
                welcomeModal4: action.welcomeModal4
            }
        default:
            return state;
    }
}

export default reducer;