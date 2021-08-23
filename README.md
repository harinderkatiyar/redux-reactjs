# redux-reactjs

Notes

1. ACTION (WHAT TO DO?)

2. REDUCER (HOW TO DO?)

3. STORE (OBJECT WHICH HOLDS THE STATE OF THE APPLICATION)

4. FUNCTIONS ASSOCIATED WITH STORE
   CreateStore()
   dispatch(action)
   getState()

   1. Action(Pure Object)

   Actions are plain javaScript objects that have a type
   fieldActions only tell what to do,but they don't tell
   how to do.

   example: return{
   type:'INCREMENT',
   PAYLOAD: num
   }

   1.1) ACTION CREATOR(PURE FUNCTION WHICH CREATES AN ACTION)
   EXAMPLE : EXPORT CONST incNumber=(num)=>{
   return {
   type:'INCREMENT',
   PAYLOAD:NUM
   }
   }

   2. REDUCER
      Reducers are functions that take the current state
      and action as arguments, and return a new state result

      example:
      const initialState = 0;
      //initialState or current state, //action as aargument  
      const changeTheNumber = (state = initialState,action)=>{
      switch(action.type){
      case 'INCREMENT': return state+action.payload;
      case 'DECREMENT': return state-1;
      default : return state;
      }
      }

   3. Store
      The Redux store brings together the state,
      actions and reducers that make up your app.
      
      it's important to note that you'll only have 
      a single store in a redux application.
       
      Every Redux store has a single root reducer function.

      example:
      import {createStore} from "redux";
      const store = createStore(rootReducers);


    REDUX Principle

    1) Single source of truth
    The global state of your application is stored as an object
    inside a single store.

    2) State is Read-Only
        The only way to change the state is to dispatch an action.
        Note - Disptch ->it's trigger the action 

    3) Immutability,One-way data flow,Predictability of outcome.

    Note - 1)Immutability -  data is not changing
            2)mutability -  data is chanaging

    4) Changes are made with pure Reducer function

    Note - Pure function means it's always return the same output
     