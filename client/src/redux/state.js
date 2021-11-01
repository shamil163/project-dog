const initialState = {
  user : null
}


const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('user')) //получаем данные из локалсторадж, если они там есть
  return stateFromLS ? stateFromLS : initialState

}

export default getInitState
