#redux-reactjs
 
Notes

ACTION (WHAT TO DO?)

REDUCER (HOW TO DO?)

STORE (OBJECT WHICH HOLDS THE STATE OF THE APPLICATION)

FUNCTIONS ASSOCIATED WITH STORE CreateStore() dispatch(action) getState()

Action(Pure Object)
Actions are plain javaScript objects that have a type fieldActions only tell what to do,but they don't tell how to do.

example: return{ type:'INCREMENT', PAYLOAD: num }

1.1) ACTION CREATOR(PURE FUNCTION WHICH CREATES AN ACTION) EXAMPLE : EXPORT CONST incNumber=(num)=>{ return { type:'INCREMENT', PAYLOAD:NUM } }

REDUCER Reducers are functions that take the current state and action as arguments, and return a new state result

example: const initialState = 0; //initialState or current state, //action as aargument
const changeTheNumber = (state = initialState,action)=>{ switch(action.type){ case 'INCREMENT': return state+action.payload; case 'DECREMENT': return state-1; default : return state; } }

Store The Redux store brings together the state, actions and reducers that make up your app.

it's important to note that you'll only have a single store in a redux application.

Every Redux store has a single root reducer function.

example: import {createStore} from "redux"; const store = createStore(rootReducers);

REDUX Principle

Single source of truth The global state of your application is stored as an object inside a single store.

State is Read-Only The only way to change the state is to dispatch an action. Note - Disptch ->it's trigger the action

Immutability,One-way data flow,Predictability of outcome.

Note - 1)Immutability - data is not changing 2)mutability - data is chanaging

Changes are made with pure Reducer function
Note - Pure function means it's always return the same output




### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

![image](https://user-images.githubusercontent.com/64924301/130692661-9f118d58-946b-4744-b80a-93b6a15b3e63.png)


