# Craps Simulator
##
## Objective:
### - Create a browser-based game that accurately models playing a standard game of craps.
##
##
##
## To play the game:
### Click [here](http://crappy-craps.surge.sh) to play the game.
##
##
## Motivation:
### I learned how to play the game of craps onboard a cruise ship while vacationing with my family when I was younger.  I was drawn to the social aspect of the game and how despite betting independently from one another, people at a table encourage each other so that everyone does well.
## Prototype View:
### Here is an initial wire-frame of how the playing field will be set up:
![Craps playing field](assets/Wireframe.png)
### Here is what the playing field looks like, post styling:
![Craps playing field current](assets/current.png)
## Technology Implemented:
- JavaScript
- CSS
- HTML
- Git 

## Pseudocode:
- Click chips to increase bet value
- Click area where bet should be placed
- Click area where bet is with empty bet total to remove current bet
- Bet displayed in 'Active Bets' area
- Click to roll dice
- Play sound file based on dice rolled
- Analyze roll --> send to appropriate payout function
  - If 7 or 11, pay out pass line, remove don't pass line bet
  - If 2, 3, or 12, pay out don't pass line, remove pass line bet
  - If 4, 5, 6, 8, 9, or 10, set point value on top row, add come bet to point bet above
  - If 2, 3, 4, 9, 10, 11, or 12, pay the field (double if 2 or 12)
  - If side bets win, pay out side bets
- If dice roll results in payout, display confetti and play 'yaay' sound
- Profit


# User Experience:
## User Persona #1:
### Abby works for a tech company in Austin, Texas.  Her employer frequently sends her to tech conferences around the globe.  Abby has an upcoming trip to Las Vegas, and knows from previous trips that her co-workers **love** playing craps as a group.  Abby wants to learn the rules of the game, how the game flows, and most importantly the lingo that goes along with it.  

## User Persona #2:
### Frankie is a card-shark and loves to gamble.  He frequently visits the riverboat casino in his home town.  Frankie is becoming tired of winning at all the card games that he has mastered.  He is looking for a way to practice the game of craps repeatedly so that he can sharpen his skills and become a dice-slinging pro before his next casino visit.

## Minimum Viable Product:
- As a user, I should be able to see what my chip total is and increment my next bet by clicking on different buttons.
- As a user, I should be able to click a button to simulate a dice roll.
- As a user, I should be able to place a bet on any of the point values at the top of the board once the point has been established.
- As a user, I should be able to place a bet on any of the side bets once the point has been established.
- As a user, I should be able to see the current bets that are active and have the ability to cancel them if the rules of the game permit it.
- As a user, I should be able to hear dealer call-outs that mimic those heard on traditional craps tables.
- As a user, I should be able to hear the sound of the dice rolling when I push the button to roll the dice.
- As a user, I should see a message showing the dice that I just rolled.
- As a user, I should be paid the correct amount when I win a bet.

## Stretch Goals:
- ~~Animated dice rolls~~
- Stylized casino chips
- ~~Texturized playing field to mimic a felt surface~~
- Help button(s) for different fields on the board
- Suggested bet options
- Ability to play odds on the Pass Line
- Remove the list of active bets and replace with chip images on the bet fields
- Add a list of previous rolls
- Add a list of previous roll frequency
- Add selectable 'felt' colors for the play field

