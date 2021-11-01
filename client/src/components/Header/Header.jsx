import React from 'react'
import Navbar from './Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import FormReg from '../Main/FormAuth/FormReg/FormReg'






export default function Header() {
  return (
    <Router>
      <div>
       <Navbar/>

       <Switch>
         
          <Route exact path="/reg">
          <FormReg/>
         </Route>


          <Route exact path="/avtor">
            <
          </Route>
       
       
       
       </Switch>

     </div>
    </Router>
  )
}

