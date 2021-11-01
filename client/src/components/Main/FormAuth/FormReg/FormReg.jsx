import React from 'react'
//импорт компонентов из материалаЮа
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useDispatch} from "react-redux"
import { useHistory } from "react-router-dom"
import { signUp } from '../../../redux/action/user.Action';

function FormReg() {
  const dispatch = useDispatch()
   let history = useHistory();

  const authHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target))
    //console.log(formData);
    dispatch(signUp(formData, history))
    e.target.reset()

  }
  
    

    
  return (
   
    <Box component="form" onSubmit={authHandler}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
    
      
        
      
      <TextField type="text" size="small" name="name" id="outlined-basic" label="Ведите имя" variant="outlined"/>
      <TextField type="text" size="small" name="email" id="filled-basic" label="Введите емаил" variant="outlined" />
      <TextField type="password" size="small" name="password" id="standard-basic" label="Введите пароль" variant="outlined" />
      <TextField type="password" size="small" name="repeatPass" id="standard-basic" label="Повторите пароль" variant="outlined" />
      <Button  type="submit" size="small" variant="contained">Регистрация</Button>
     
      </Box>
    
   
  )
}

export default FormReg

