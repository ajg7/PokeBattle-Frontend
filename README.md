# PokeBattle- Frontend

PokeBattle allows users to create a team of 6 pokemon and battle a randomly generated team.
Make sure to check out [PokeBattle's backend](https://github.com/ajg7/PokeBattle-Backend)

## Set-Up

1. npm install

2. npm start

### Prettier

npm run format

App uses Husky as a pre-commit hook

## App Flow

### Login/Signup

1. Click on Signup or Login

2. Enter email and password (must be 8 or more characters)

3. You will be taken to the Teams Menu

### Teams Menu

![PokeBattle Flow](./src/assets/PokeBattle.gif "PokeBattle Flow")

1. Click on "Make Team Button"

2. Click on "Edit Team Button"

3. You will be taken to the Pokedex

### Pokedex

1. Make your team with the original 151 pokemon

2. Filter by type, weight, habitat, and much more

3. Once you have a team of no more than 6, scroll down to the bottom

4. Click on Battle!

### Battle Page

1. Switch the color of the arena at the bottom of the page

    - Notice that the colors are of the gyms and elite four

2. Select your pokemon

3. If your pokemon's type is dominant over the challenger's then you win the battle, but if not you lose. However, if there is a tie, a coin if flipped to determine the winner

4. After the battle, you can either battle again or return to the Teams Menu

### Who's That Pokemon?

One additional minigame is "Who's That Pokemon?"

![Who's that pokemon](./src/assets/PokeBattle-%20Whos%20That%20Pokemon.gif "Who's That Pokemon Flow")

1. Write down which pokemon it is

2. If you get it right, then 1 point, wrong, then it's -1 point

3. However, if it is a shiny pokemon then 5 points for being right and -5 for being wrong

### Records Room

Allows you to check the stats on each of your teams, and for your score in "Who's that Pokemon?"

### Logout/Delete Account

When you are all done, then you can either logout or delete your account. Thank you for playing!

## Technologies

-React

-Redux

-axios

-Styled-Components

-Jest
