# Basic Node JS

  - 1. Node Packages
    - 1. 1. Create a new folder called my-first-npm
    - 1. 2. cd into the folder and initialize an npm package
    - 1. 3. Answer all the questions

  - 2. Imports
    - 1. 0. npm install the colors package
    - 1. 1. Create the files required.js
    - 1. 2. The file should export a function that
            console.log's Hello Node when called
    - 1. 3. Create another file called index.js
            the file should require "required.js"
            and get the function from the file,
            then call it
  
  - 3. Filesystem
    - 3. 1. Use the fs.readdirSync function to get
            an array of all files in your project
    - 3. 2. Output the files in green and bold color
    - 3. 3. Check if the file ('/swapfile') exists
            If it exists print SWAPPED in green
            If not print UNSWAPPED in red
    - 3. 4. List the contents of the '/etc' folder

  - 4. Child Processes
    - 4. 1. Use child_process.exec to run the following
            command: 'echo hi', and print the output.
    - 4. 2. Use exec to run the command 'cat /proc/cpuinfo'
            and print the output.