# FrontEnd Testing

This repo is a sandbox to demo some common pieces of code we write on the front end. It is primarily using:
- [jest](https://facebook.github.io/jest/) - test and assertion engine
- [enzyme](http://airbnb.io/enzyme/) - react testing utilities


## Getting Started
1. `npm install`
2. `npm run test` or `npm run test:watch`


## Test Categories

### React Components

[Component example](__tests/components/button.spec.js)

#### Markup
We can simply verify the component renders correctly with `enzyme` and jest's `toMatchSnapshot`

#### Instance methods
Keep these functional and test whether they are returning correct output. In the example below, we need to verify getFullName is producing the correct output.

```javascript
class Comment extends React.Component {
  // This is an instance method
  getFullName(user) {
    return `${user.first_name} ${user.last_name}`
  }

  render() {
    return (
      <div>{getFullName(this.props.user)}</div>
    )
  }
}
```

___

### Redux

#### Action Creators
Synchronous action creators are straight forward. They take some arguments and return an object. We can test these actions to verify they are returning an object with the correct type and payload properties.

With asynchronous actions, we will typically want to verify the correct actions were dispatched. We can use [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) to test what actions have been dispatched to a mock store.

[Sync Action example](__tests__/redux/actions.sync.spec.js)<br>
[Async Action example](__tests__/redux/actions.async.spec.js)

#### Reducers
Reducers are just functions that can be tested in isolation. They take in 2 arguments: `state` and `action`, and they return a new state. We can test to ensure the correct state is being returned given specific actions.

[Reducer example](__tests__/redux/reducers.spec.js)

___

### Utilities

We need to test all utility and helper functions we write to format, parse and filter data. Testing these types of methods will help to keep the codebase clean and functional.

For example, if we have a function to recursively flatten an array, we need to test all i/o cases for the method.

[Utility example](__tests__/helpers/flattenArray.spec.js)
