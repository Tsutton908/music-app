# Full Stack Spotify Clone

The project was created using the [create-react-app](https://github.com/facebook/create-react-app) CLI and the [React Redux](https://react-redux.js.org/) library. This app is meant to work in conjuction to an active spotify premium account. 

## Table of Contents
- [Description](#description)
- [Motivation](#motivation)
- [Tech/Framework Used](#techframeworks-used)
- [API's Used](#api-frameworks-used)

## Description 

A clone web application using the create-react-app CLI. the retrieves data from the [Spotify API](https://developer.spotify.com/documentation/web-api/) and mimics some functionality of the official Spotify web player. Additionally the project uses the [react-spotify-web-playback](https://www.npmjs.com/package/react-spotify-web-playback) npm package to manage the music player/playback function of the app.

Due to restrictions placed on the Spotify API and react-spotify-web-playback package, a premium Spotify account is necessary to access full functionality of the app. (However if a user does not have a premium accunt or does not wish to use personal account information, a provided free Spotify account/authenticaiton can be proved. (although functionality will be limited)). For non-premium users, the UI and front-end behaiviors will work, but the Spotify player will NOT be accesable.


## Motivation

This project was created by me mainly to teach myself full stack React development. Since the point of this project was not to make expectional UI/UX design choices, I chose to keep the majority of the design as in the official Spotify App. However overall design changes were made to the app such to not be a complete clone to the original. Since I am already an adivid Spotify user, I thought this project would be an interesting way to deploy my skills in a fun way.

The majority react components and logic was written from scratch by myself. I chose not to use existing component libraries because that forces me to practice with React components as much as possible. 


## Tech/Frameworks Used
- React (create-react-app CLI)
- React-dom
- Redux
- Firebase (for hosting only)

## API Frameworks Used
- react-spotify-web-playback
- spotify-web-api-js