// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)
  const countReducer = (state, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return {
          ...state, 
          count: state.count + action.step
        }
        case 'DECREMENT':
          return {
            ...state, 
            count: state.count - action.step
          }
      default:
        throw new Error(`Unsuported action type: ${action.type}`)
    }

  }

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
