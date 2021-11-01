import { SET_USER } from "../type";
const userReducer = (state = null, action) => {
  const { type , payload } = action
  switch (type) {
    case SET_USER: {
      return payload;
    }

    default:
      return state;
  }

}


export default userReducer;
