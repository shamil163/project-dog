import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

function Navbar() {
  

  const user = useSelector(state => state.user)
 


  return (
    
    <div style={{ backgroundColor: "pink", width: "auto", height: "70px" }} >
      {user?.id}
       {user?
       <>
        <Link style={{ textDecoration: "none" }} to={'/exit'}><Button style={{ margin: "5px" }}type="submit" size="small" variant="contained">Выход</Button></Link>
        </>
        :
        <>
        <Link style={{ textDecoration: "none" }} to={'/reg'}><Button style={{ margin: "5px" }} type="submit" size="small" variant="contained">Регистрация</Button></Link>
        <Link style={{ textDecoration: "none" }} to={'/avtor'}><Button style={{ margin: "5px" }}type="submit" size="small" variant="contained">Вход</Button></Link>
        </>
       }   



        </div>
      
   
  )
}

export default Navbar

