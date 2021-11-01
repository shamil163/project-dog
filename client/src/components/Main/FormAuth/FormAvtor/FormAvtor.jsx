import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { signIn } from '../../../../redux/action/user.Action';


function FormAvtor() {
  const dispatch = useDispatch()
  const { history } = useHistory()
  const avtorHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target))
    console.log("formData======",formData);
    dispatch(signIn(formData, history))
    e.target.reset()

  }
  return (
    <Box component="form" onSubmit={avtorHandler}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >




      <TextField size="small" name="email" type="text" id="outlined-basic" label="Ведите e-mail" variant="outlined" />
      <TextField size="small" type="password" name="password" id="filled-basic" label="Введите пароль" variant="outlined" />
      
      <Button type="submit" size="small" variant="contained">Войти</Button>

    </Box>

  )
}

export default FormAvtor

