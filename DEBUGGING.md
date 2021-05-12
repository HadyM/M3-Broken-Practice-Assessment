# Questions to answer for each bug you find:

**Once you identify a bug, before you fix it, answer the following:**

1. How did I know there was a problem? List all of the available information (Cypress assertion error? Failed to compile? JavaScript error message? Is there a line number? Something not rendering correctly in the browser?)
1. Based on the information I have (error message, assertion error, line number, etc) :
   - What is the most likely cause for the bug? Why is this a good possible explanation?
   - Where should I start looking for the bug?

**Once you've fixed the bug, answer the following:**

1. Describe the steps you took to identify the problem.

# Example bug

**Before Fixing**

1. Error message: TypeError: Cannot read property 'front_default' of undefined. Line 7 of PokemonCard.js
1. Based on this information:
   - I think one of my variables is undefined when I don't expect it to be
   - I want to find the variable that is undefined - I'll start looking at line 7 of PokemonCard.js

**After Fixing**

1. PokemonCard.js line 7 references `pokemon.sprites.front_default`. `pokemon` is passed as a prop, so I looked in the parent component. In Pokemon.js, we were sometimes passing an empty object as the `pokemon` prop, which caused the type error. To fix this, I used conditional rendering to only render a PokemonCard if there is a sprite object.

Debugging Steps:

1. Expected corresponding JSX closing tag for <Route>
    * Added  "/" to the  Pokemon  closing tag

2. Invariant failed: You should not use <Link> outside a <Router>
    * Added <BrowserRoute> to the index.js <App /> 

3. Clicking the links from home wouldn't change the link
     *  Added "exact" to the home path in App.js

4. Cannot read property 'front_default' of undefined Pokemon.js
     * Create an if else statement or short circuit method to pull the image instead of an empty object

 5. Unhandled Rejection (TypeError): Cannot read property 'name' of undefined
      * The prop was called berry which isn't the proper prop to be passed down the right prop is "currentBerry"

   6. Unhandled Rejection (TypeError): Cannot read property 'results' of undefined     
      * In the locations.js first called the getLocations function in in the componentDidMount then recieved the type error of results is undefined because in the initial call of the async function was missing an "await"        
