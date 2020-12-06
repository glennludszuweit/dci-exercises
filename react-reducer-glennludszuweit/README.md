
### Exercise

1. Clone Wars
    - Create a component called Clone that renders an input
      field and a div.
    - The content of the input field should be mirrored into
      the div. To achieve this create a reducer, using useReducer
    - In the input fields onChange event that sends a message
      to the reducer.

2. Ping Pong
    - Just like in the clone wars create an input field and a
      div, in addition 2 buttons
    - changes to the input field should update the div
    - If you press the first button the reducer should
      change the input field and the content of the
      div toLowerCase
    - If you press the other button, toUpperCase

3. Auto Suggest (Hard)
    - Create an array containing the names of your favourite
      movies (or fruits) as strings (['Batman','Wag the Dog',...])
      it should contain at least 5 items
    - Create and input field as the searchbox
    - Create a ul-list to hold the search results
    - Create a reducer that recieves a search action
        - When the input field is changed,
          search for matching entries in the list
        - When the search field is cleared (add a button)
          the whole list shoud be visible
    - DO USE ONLY ONE REDUCER, ONE STATE OBJECY
### `npm install`

Will install the required nodeJS modules. **This is nessecary!**

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

