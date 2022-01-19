## Run local development server

`npm start`

## What I would add:

- Better input and submit validation on filter inputs.
- Better error handling (in page messaging, handle status codes etc)
- Loading states for components (show a spinner whilst the api fetches the data for example)
- Overall design (currently basic styles and transitions are used, would like to expand on this with a more dynamic display, for example CTA blocks appearing in sequence, as though they were stacking. Swiping effect when changing from accordion to grid)
- More filters and sorting options
- 'No results' component
- Add pagination for larger result sets
- Show all details of beer on a different page when CTA is clicked
- Refine the sort method to re-sort display when data fetched - if a sort option has already been selected
- Simple tests using Jest
- Fix issue causing chrome browser to offer translation from French to English
