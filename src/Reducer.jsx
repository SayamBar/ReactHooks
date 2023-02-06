import { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return {count:state.count+1,text:state.text};
    case "updateText":
      return {count:state.count, text:!state.text}
  }
}


function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count:0 , text:true});
  
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => {
        dispatch({type: "increment"});
        dispatch({type: "updateText"});
      }}>Click</button>
      {state.text && <p>This is a text</p>}
    </div>

  );
}

export default Reducer;
