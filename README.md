Clone this repo then run the following commands in a terminal
- brew update && install yarn
- mkdir <project_name>
- cd <project_name>
- yarn install

In one terminal shell run:
- yarn build

And in another terminal run:
- yarn start

Go to localhost:3000 it should say "Hi Y'all!" and "Sup Guys!" in the console

This setup will connect to your local Ticket Service and make an activeGamesInfo call 

You can access the games json data in `window.loadInfo.games` (this is how we currently do loadInfo)

You should now only have to put your JS/JSX files in the src folder

