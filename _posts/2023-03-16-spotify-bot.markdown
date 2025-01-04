---
layout: post
title:  "SpotifyBot"
date:   2023-03-16 20:59:18 -0800
excerpt: "After realizing that Spotify shuffle constantly repeats songs, I developed a web application that takes Spotify shuffling to the next level, offering complete randomization and custom playlist creation. With this tool, every click generates a fully randomized queue from your selected playlist. It clears the queue before adding new songs, ensuring a new experience every time. If you're feeling nostalgic, you can also create personalized playlists of your top tracks from various time ranges."

gallery:
    - /assets/images/spotifybot/00.png
    - /assets/images/spotifybot/01.png
    - /assets/images/spotifybot/02.png
    - /assets/images/spotifybot/03.png

links:
    - name: "GitHub"
      url: "https://github.com/jasunlichee/spotifyBot"
      icon: "/icons/github-icon.png"
    - name: "Spotify"
      url: "https://open.spotify.com/playlist/0wp2z3C9zhSf5tFt0aTdiR?si=a86c34148b5e448d"
      icon: "/icons/spotify-icon.png"

tags:
    - "python"
    - "spotify"
    - "api"
    - "playlist"
    - "flask"
    - "web-app"
---

# Overview

I would often hear the same songs over and over again when listening to Spotify, which really impacted my listening experience. After looking into it, I realized that their shuffle was not completely random, and instead added suggested songs to the queue. I wanted to create a tool that I could use and populate my queue completely randomly. While working on this project and with various Spotify API endpoints, I also added some extra features to my web application.

# Features

Each of the following are features are endpoints I've developed for the spotifyBot Flask application: 

- Spotify account login

- Random queue population

- Random playlist creation

- Playlist creation: top 50 songs in the last month

- Playlist creation: top 50 songs in the last year

- Playlist creation: top 50 songs of all time

# Technical

To create a basic web app that integrates with Spotify, I used Python along with the Spotipy library, which simplifies interaction with the Spotify Web API. The web app, built with Flask, includes multiple endpoints that allow users to shuffle their music and create customized playlists. Python handles the backend logic, including user authentication and authorization with Spotify’s OAuth process, ensuring secure access to the user's account. Spotipy fetches the user's playlists, shuffles them, and generates new ones based on specified criteria like genre or mood. Using the Spotify Web API, the app can retrieve track information, add tracks to playlists, and manage playback. Flask processes user requests and interacts with the API, providing a smooth experience for dynamically managing playlists and music playback.

