### Nico's Create-React-App template

This template seeks to provide the boilerplate that I usually prefer to start with, packaged in a convenient template that works with the create-react-app cli tool.

- [x] redux / redux-thunk
- [x] react-router-dom
- [x] styled-components
- [x] form logic
- [ ] electron config -> electron config npm script is in progress (enables cross-platform desktop apps)
- [ ] typescript -> different template is in progress

### Usage:

1) Clone this repo or make your own template!

2) Run `npx create-react-app <your_app> --template file:./path/to/cra/template`

3) (If using my template) run:
`yarn setup && yarn start`  

After this, the new react app should open in a new window at http://localhost:3000  

### Guide:

Adding a New Page:
- create a new folder in `/pages`, preferrably named how your Page is named
- create `index.js` and `(ComponentName).js` inside the folder
- specify the Route for the page in `App.js` (i.e. `<Route exact path="/profile" component={Profile} />`)
- (optional) add a Link to the page in `components/layout/Navbar.js` with react-router's `<Link />` component

Other Recommendations:
- new components should be created in `/components` either as their own file or folder
- keep any higher order components in a directory `/hoc` instead of in `/components`
- keep utility functions in a directory `/utils`
- UI frameworks should be able to be added with ease. Modifying `src/index.js` should usually be enough 
