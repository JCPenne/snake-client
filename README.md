# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here.

## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the server using the `node play.js` command in the Snake-Server folder.
- Run the development snake client using the `node play.js` command in the Snake-Client folder.

## Tips

- In the Snake-Server folder, navigate to the constants.js file. Set the variable AUTO-MOVE-DEFAULT to true if you would like your snake to have constant forward momentum. (The game speed can be adjusted as well, a lower number equals faster movement. See GAME_SPEED variable).

## Keybindings
- W,A,S,D for movement
- H,J,K,L Send messages across the server for other players to see!

## Final Product

!["Initial player joins the game"](</Screen%20Shot%202022-06-17%20at%2010.51.04%20AM%20(2).png>)
!["Second player joins the game"](</Screen%20Shot%202022-06-17%20at%2010.51.40%20AM%20(2).png>)
!["Other player notified a second player joined the game"](</Screen%20Shot%202022-06-17%20at%2010.51.48%20AM%20(2).png>)

