import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { REGISTER } from "../redux/actionTypes";

export const Registration = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const dispatch = useDispatch();

  const HandleRegister = () => {
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return
    }else{
      dispatch({
        type: REGISTER,
        payload: {
          id: new Date().getTime(),
          name,
          username,
          password,
        },
      });
      setName("");
      setUserName("");
      setPassword("");
      setconfirmPassword("");
    }
  };

  return (
    <DIV>
      <form className="register">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="ConfirmPassword"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
        />
        <br />
        <input type="button" value="Register" onClick={HandleRegister} />
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
