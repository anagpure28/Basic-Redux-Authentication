import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LOGIN } from "../redux/actionTypes";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((store) => store.authReducer.users);

  const HandleLogin = () => {
    const payload = users.find(
      (user) => user.username === username && user.password === password
    );

    if (payload) {
      dispatch({
        type: LOGIN,
        payload,
      });
      alert("Login Successfull !!")
    } else {
      alert("Wrong Credentails !!");
    }
  };

  return (
    <DIV>
      <form className="login">
        <input
          type="text"
          placeholder="UserName"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="button" value="Login" onClick={HandleLogin} />
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: 2% auto;
  border: 1px solid gray;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 20px;
  align-items: center;
  background-color: #f4f4f4;
  padding: 10px;

  input {
    /* height: 20px; */
    font-size: 1rem;
    padding: 5px;
    margin: 7px auto;
    /* width: 80%; */
    border-radius: 5px;
  }

  input[type="button"]{
    padding: 5px 15px;
    cursor: pointer;
  }

  button {
    width: 50%;
    /* height: 35px; */
    font-size: 20px;
    border-radius: 5px;
    padding: 8px;
    background-color: black;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #000000;
  }
`;