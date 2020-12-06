
### Exercise

0. Clean up this freshly created project to have a good starting point.

1. Create a component called **Button**, give it an onClick handler
that is connected to a function that will alert("You clicker")
when the button is clicked

2. Create a component called **UncontrolledForm**
let this component return a fragment conatining a **button**
and an input field

    - Create a {ref} for the input field using React.useRef()
    - Connect the button to a function to handle the onClick event
    - Access {ref}.current to get the input field's value
    - Output the value using alert() 

3. Create a component called **ControlledForm** let this component
return an input field of type number and a default value of 23.

    - Use React.useState() to create a state for the input field
      and a function to set it's value
    - connect the state's value to the input field
    - create a function to handle changes and connect it to the
      **onChange** handler of the input field
    - on every change add one to the current value and call
      ste setter function from the state.

### `npm install`

Will install the required nodeJS modules. **This is nessecary!**

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

