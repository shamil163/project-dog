import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import initialState from "./state";
import rootReducer from "./reducer/root.Reducer"

const store = createStore(rootReducer, initialState(), composeWithDevTools(applyMiddleware(thunk))) // по дефолту


store.subscribe(() => {
  window.localStorage.setItem("user", JSON.stringify(store.getState())); // записываем данные в localstorage
});



export default store;
