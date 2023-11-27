import { LOGIN, LOGOUT, REGISTER } from "../actionTypes";

const initailState = {
  users: [],
  loggedInUser: false,
  products: [
    {
      id: 1,
      name: "Pen",
      price: 5,
    },
    {
      id: 2,
      name: "Pencil",
      price: 2,
    },
    {
      id: 3,
      name: "Eraser",
      price: 3,
    },
    {
      id: 4,
      name: "Sharpner",
      price: 4,
    },
  ],
  user: null
};

// export const reducer = (state = initailState, action) => {
//     switch (action.type) {
//         case REGISTER:
//             return {...state, users: [...state.users, action.payload]}
//         case LOGIN:
//           return {...state, user: action.payload, loggedInUser: true}
//         case LOGOUT:
//           return {...state, user: null, loggedInUser: false}
//         default:
//             return state
//     }
// }  
export const reducer = (state = initailState, {type, payload}) => {
    switch (type) {
        case REGISTER:
            return {...state, users: [...state.users, payload]}
        case LOGIN:
          return {...state, user: payload, loggedInUser: true}
        case LOGOUT:
          return {...state, user: null, loggedInUser: false}
        default:
            return state
    }
}