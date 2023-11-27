import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Registration } from "./component/Registration";
import { Login } from "./component/Login";
import styled from "styled-components";
import { LOGOUT } from "./redux/actionTypes";

export const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.authReducer.products);
  const users = useSelector((store) => store.authReducer.users);
  const user = useSelector((store) => store.authReducer.user);
  // console.log("Products", products);
  // console.log("Users", users);

  return (
    <DIV className="App">
      {/* <h1>Products</h1>
      {products?.map((el, i) => (
        <div key={i}>
          <p>
            {el.name} - {el.price}
          </p>
        </div>
      ))}
      <hr /> */}
      <h1>Users</h1>
      {users?.map((el, i) => (
        <div key={i}>
          <p>Name: {el.name}</p>
          <p>UserName: {el.username}</p>
        </div>
      ))}
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Registration />
        {user ? (
          <input
            type="button"
            value="Logout"
            onClick={() => {
              dispatch({
                type: LOGOUT,
              });
            }}
          />
        ) : (
          <Login />
        )}
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  input {
    /* height: 20px; */
    font-size: 1rem;
    padding: 5px;
    margin: 7px auto;
    /* width: 80%; */
    border-radius: 5px;
  }

  input[type="button"] {
    padding: 5px 15px;
    cursor: pointer;
  }
`;
