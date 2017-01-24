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

(-A-) (Required) Implement a barebones TODO-App in React/Redux, incorporating unidirectional dataflow. Add and delete should work. Do not implement filters or update. All text rendered in the browser should be lowercase. An optional starter project can be found here. If you decline to use it, don't forget to include instructions to stand-up your app!

(-B-) Record a short video (max: 5 minutes). Use it to walk us through your work. Touch on at least one thing you're proud of, and at least one thing you think you could have done better.

(-C-) Minimalist Layout Tweaks: wrap your app in a container element and center it vertically and horizontally.

(-D-) Persist your TODOs to localStorage OR write a paragraph in README.md explaining how you would do it.


### Why did I use my own boilerplate?

There was no real reason not to use the provided boilerplate, but since the
installation was already similar, I decided to use the codebase I was most
familiar with.

### Did you do unit testing?

No, I did not do unit testing, because it was more important to me to get a working code before the deadline, however I usually insist on unit testing before completion, and have mocha set up as part of this project.

### What is this "reduxify" thing?

Reduxify is an NPM module I created and published which basically removes
some of the verbose text from the mapStateToProps() and mapDispatchToProps()
declarations.

It automatically maps all actions to the component, and maps any reducers
that component might need to render to the state. (Mapping only those reducers you need
means that you don't force any unnecessary re-rendering).

### Why Mocha?

Mostly because it's what I'm most familiar with, plus the chai-as-promised library
helps me with my async.

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

### Why'd you take more than an hour?

Unexpected behavior.  Material UI, which I'm using to make the TODOs list look pretty
automatically *assumes* that if there is a <Checkbox> inside a <ListItem> that clicking *anywhere* in the <ListItem> will change the checkbox.  I did not know this, and
so ended up wasting a bit of time trying to figure out why my onClick event was firing twice.

In reality, it was because it was firing once for the <ListItem onClick> and again for the
<Checkbox onCheck> That ate up some time.
