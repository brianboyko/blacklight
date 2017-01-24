# Instructions

To start the app, run
```
$ npm i
$ npm start
```

The site will be live on "[http://localhost:3000](http://localhost:3000)"

## Primary Goals:

* Todo App in React/Redux works.
* Add works
* Delete works
* (optional) Check-off works
* Text is lowercase
* App is centered vertically and horizontally.

## Incomplete goals:

* Writing to local storage.

Not wanting to keep you waiting further, I decided to skip the implementing a save to local storage.  While there are a couple of hacky ways to do it, it might be best simply to write middleware which writes the current Redux state to localstorage, using localStorage.setItem('todoState', JSON.stringify(todoState));  One can easily then use the React lifecycle events (specifically, componentWillMount, to see if there is data in localStorage.todoState and if so, to "hydrate" the state at the beginning.  Hydration is a trick I used before but haven't set up for it here - essentially, you pass in the entire state as a single action with type: "HYDRATE" - and on each reducer, have a case: "HYDRATE" which replaces the state's value with the one sent in the action (if the action exists)).

### Why did I use my own boilerplate?

There was no real reason not to use the provided boilerplate, but since the installation was already similar, I decided to use the codebase I was most familiar with.

### Did you do unit testing?

No, I did not do unit testing, because it was more important to me to get a working code asap, however I usually insist on unit testing before completion, and have mocha set up as part of this project.

### What is this "reduxify" thing?

Reduxify is an NPM module I created and published which basically removes some of the verbose text from the mapStateToProps() and mapDispatchToProps() declarations.

It automatically maps all actions to the component, and maps any reducers that component might need to render to the state. (Mapping only those reducers you need means that you don't force any unnecessary re-rendering).

### Why is the Todo's reducer so complex?
It's true.  To cross an item off the list, I use:
```
return state.slice(0, action.index)
  .concat(Object.assign(state[action.index], {
    completed: !state[action.index].completed
  }))
  .concat(state.slice(action.index + 1));
```
instead of
```
state[action.index].completed = !state[action.index].completed;
return state;
```
While the latter code is much simpler to parse, it violates functional programming principles by mutating the state directly. To take two slices and then concatenate
avoids variable mutation.

### What's with that nasty warning in the console?

One non-critical bug with Material-UI was that it required the react-tap-event-plugin, which has since been depreciated as newer versions of React came out -- and while not including react-tap-event-plugin creates a *warning* because it is an unknown prop, adding react-tap-event-plugin with the newer versions of React cause a failure instead. The warning is noted.

You can read more about it in [this Stack Overflow topic.](https://github.com/callemall/material-ui/issues/4670#issuecomment-247789924).

### Why'd you take more than an hour?

Unexpected behavior.  Material UI, which I'm using to make the TODOs list look pretty automatically *assumes* that if there is a <Checkbox> inside a <ListItem> that clicking *anywhere* in the <ListItem> will change the checkbox.  I did not know this, and so ended up wasting a bit of time trying to figure out why my onClick event was firing twice, and went down a blind alley thinking it had to do with event.stopPropagation();

In reality, it was because it was firing once for the <ListItem onClick> and again for the <Checkbox onCheck> That ate up some time.

I also figured since I was already running late, I'd make up for celerity with quality.
