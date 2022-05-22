import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({ name: "harry styles", email: "harry@gmail.com", age: 32 })
          )
        }
      >
        Login
      </button>

      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
};

export default Login;
