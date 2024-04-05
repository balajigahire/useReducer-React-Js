import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  if (action.type === "dec") return state - 1;
  if (action.type === "inc") return state + 1;
  if (action.type === "setCount") return action.payLoad;
}

const btnSize = { width: "40px", height: "40px" };
const inputBox = { height: "40px" };

export default function DemoFun() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <button style={btnSize} onClick={() => dispatch({ type: "dec" })}>
        -
      </button>
      <input
        style={inputBox}
        type="text"
        value={count}
        onChange={(e) =>
          dispatch({ type: "setCount", payLoad: Number(e.target.value) })
        }
      />
      <button style={btnSize} onClick={() => dispatch({ type: "inc" })}>
        +
      </button>
    </div>
  );
}
