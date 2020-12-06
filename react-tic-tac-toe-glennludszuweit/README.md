
### Exercise

Create the classic Tic Tac Toe game. Use useReducer to write
the game Logic.

Start out with a default state like this

```JavaScript
const defaultState = {
    fields: [0,0,0,0,0,0,0,0,0],
    player: 1,
    winner: 0
}
```

The 3x3 squares should be represented in state.fields,
Index 0,1,2 are the first row, 3,4,5 the second row,
6,7,8 the last row.

  - The game begins with Player1's turn. When he clicks
    one of the fields, a message should be dispatched
    to the reducer that field {x} has been selected.

  - The corresponing index in state.fields shoud be changed
    to the player's number (in this case one).

  - state.player shoud no switch from 1 to 2 indicating that
    it is Player2's move.

  - It should not be possible to click that field again
    (this can be an if condition in the reducer).

  - A reset button should re-initialize state.fields
    to [0,0,0,0,0,0,0,0,0].

  - (BONUS) Check if a player has won the game.

### `npm install`

Will install the required nodeJS modules. **This is nessecary!**

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

