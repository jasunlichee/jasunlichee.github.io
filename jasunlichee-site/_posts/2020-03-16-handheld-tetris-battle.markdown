---
layout: post
title:  "Handheld Tetris Battle"
date:   2020-03-16 20:59:18 -0800
excerpt: "My team and I designed and programmed a handheld Tetris game that brings the classic gameplay to life on an LCD screen. I used two-dimensional arrays to represent Tetris pieces, crafted the program structure and GUI to deliver smooth gameplay. The game runs on Arduino, leveraging multiple libraries for robust functionality. For the controller, I modified and soldered a Wii Nunchuk, adding a creative and ergonomic touch. Tthis project showcases a blend of hardware and software design."

video: /assets/videos/tetris.mp4

tags:
    - "arduino"
    - "soldering"
    - "tetris"
    - "c#"
    - "hardware"
    - "nunchuk"
---
# Overview

My team created a handheld Tetris battle game for UCSB's ECE 5 course. We created two separate devices and repurposed Wii Nunchucks to act as our controllers. After clearing a line, these two Tetris games could send lines to each other to impede their progress. We thought this was a fun way to expand upon the original Tetris game.

# Features

- Two players compete, with lines cleared on one screen adding lines to the opponent’s screen

- Wii Nunchuk controllers are used for movement, rotation, and fast falls

- NRF24L01 wireless transceivers sync gameplay between the two systems

- Tetromino fall speed increases after every 10 lines cleared

- Tetrominoes and game grid are displayed on 3.2-inch TFT LCD screens

- Active tetrominoes are dynamically placed and rotated with collision detection

- Tetrominoes are randomly generated using a bag-style randomizer

- Optimized I2C communication ensures responsive controller input

# Technical

The Tetris 1v1 Battle project integrates several hardware components, including two Teensy 3.2 microcontrollers, 3.2-inch TFT LCD screens, Wii Nunchuk controllers, and NRF24L01 wireless transceivers, to create an interactive and competitive multiplayer experience. Each Teensy board controls one player's game system, handling the logic for tetromino movements, rotations, and collisions within a 2D grid. The tetrominoes themselves are represented as a set of coordinates stored in memory, and the system checks for legal placements before allowing movements. Players interact with the game using the Wii Nunchuk’s analog joystick for horizontal movement and fast falls, while the C and Z buttons are mapped to rotate and drop tetrominoes respectively.

Wireless communication is a critical aspect of the project, allowing the systems to sync with each other and send "garbage" lines to the opponent’s screen when lines are cleared. The NRF24L01 radios communicate in a compact message format, with the first bit signaling a loss and the last two bits indicating the number of lines to be sent. The game logic utilizes a bag-style randomizer to determine the next tetromino, ensuring fair gameplay. Additionally, the system gradually increases the tetromino fall speed after every 10 lines cleared, providing an escalating challenge. The final system delivers a competitive multiplayer experience, with both systems updating their displays in real-time, making it a seamless and engaging game for both players.

To see the full documentation of our project, download it here: [Download PDF](/assets/pdf/report.pdf)