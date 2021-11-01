import { SET_USER } from "../type";

//регистрация
export const signUp = (payload, history) => async (dispatch) => {
  console.log('++++',payload);
  const response = await fetch("http://127.0.0.1:3005/registration", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  body: JSON.stringify(payload), //отправляем на бэк все данные введенные в форму
});
if(response.status === 400) {
  history.replace("/avtor");
} else {
   history.replace("/reg");
}
}


//вход
export const signIn = (payload, history) => async(dispatch) => {
   //console.log("-----", payload);
   const response = await fetch("http://127.0.0.1:3005/avtorization", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     credentials: "include",
     body: JSON.stringify(payload), //отправляем на бэк все данные введенные в форму
   });
   //console.log("response-------", response);
   if(response.status === 200) {
     const user = await response.json()
     const { id } = user.id
     console.log(user.id);
     
     dispatch(setUser(user));
     history.replace(`/avtor`);
   } else {
     history.replace("/avtor");
   }
   
}


export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
