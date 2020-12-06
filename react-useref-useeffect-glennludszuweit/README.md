
### Exercise

1. Using useRef

The useRef hook is a way to get rid of having to
document.querySelector your elements.

  - Create a component Hi that contains the simple Words:
    "Hello World" in a paragraph.
  - Create an setInterval funcotion that will flip
    the text color from red to green every second

2. Using useEffect

Create an input field that changes it's background color
to the color you write into it.

  - Create a component ColorEditor containing an input
    The component shoud be a controlled component,
    getting it's value from a useState-state and
    {onChange} it should {setState} using it's current value.
  - Create a {ref} using useRef and assign it to the input
    as well.
  - Now create a function inside a useEffect call
    The function should use the {ref}.current to get the
    input field, and set it's {style.backgroundColor}
    to the current {state}, make sure to include {state}
    in the second argument of your {useEffect} function,
    so the function will be called once the state changes.

### `npm install`

Will install the required nodeJS modules. **This is nessecary!**

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

