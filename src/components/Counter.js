import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementAsync,
  decrementByAmount,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from "../features/counterSlice";
import styles from "../styles/Counter.module.css";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const [decrementAmount, setDecrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>

      <div className={styles.row}>
        <input
          className={styles.textbox}
          value={incrementAmount}
          aria-label="Set increment amount"
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Add Amount
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}
        >
          Add Async
        </button>
      </div>

      <div className={styles.row}>
        <input
          className={styles.textbox}
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={() => dispatch(decrementByAmount(Number(decrementAmount)))}
        >
          Subtract Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(decrementAsync(Number(decrementAmount)))}
        >
          Sub Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
