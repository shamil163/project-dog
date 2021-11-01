const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { User } = require("../db/models")


router.post ("/registration" , async (req, res) => {
  const {name , email , password, repeatPass} = req.body
  if(password === repeatPass) {
    if(name , email , password) {
      try {
        const hashPass = await bcrypt.hash(password,6)
        const newUser = await User.create({
          name,
          email,
          password: hashPass,
        });
        
      } catch (error) {
        return res.sendStatus(500);
      }

    }
    return res.sendStatus(400);

  }
    return res.sendStatus(500);
})


router.post("/avtorization", async (req, res) => {
  const { email , password } = req.body;
  //console.log("req.body", req.body);
  if(email , password ) {
    try {
      const currentUser = await User.findOne({ where: { email } }); 
      //console.log("++++++++currentUser", currentUser);
      if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
        req.session.user = {
          id: currentUser.id,
          login: currentUser.email,
        }
        //console.log("-----------sessssssia", req.session.user);
        return res.json({ id: currentUser.id, login: currentUser.email });
      }
      return res.sendStatus(401);
    } catch (error) {
      return res.sendStatus(500);
    }

  }
  return res.sendStatus(400);
});



module.exports = router

