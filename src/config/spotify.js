//sends requests to spotify to handle authentication for me 
export const authEndpoint = "https://accounts.spotify.com/authorize";

//
/*const redirectUri = "http://localhost:3000/"; */
const redirectUri = "https://music-app-2f906.web.app/"

//the client id for usage of the api
const clientId = "1a109b64ecf34f62a7311955fc32f7ea"

//scopes for information given by spotify to be used
//makes so the user can not delete any information, only read the information permitted by the api
//user permissions
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
    "playlist-modify-public",
    "playlist-modify-private",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial;
        }, {})
}

//the url presented when the login button is hit and prompted to login
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;