const express = require('express');
const router = express.Router();
const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator');
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async function (req, res, next) {
   try {
      const { phoneNumber, password } = req.body
      const user = await User.findOne({ phoneNumber })
      if (!user) {
         return res.status(400).json({message: `Bunaqa telefon raqamli foyidalanuvchi topilmadi`})
      }
      const isPassword = bcrypt.compareSync(password, user.password)
      if (!isPassword) {
         return res.status(400).json({message: `Parol noto'g'ri`})
      }
      const token = jwt.sign({ id: user.id }, process.env.SEKRET_KEY, {
         expiresIn:"2h"
      })
      return res.json({
         token: token,
         user: {
            id: user.id,
            name: user.name
         }
      })
   } catch (err) {
      
   }
})

router.post('/register', [
   check("name", "Maydon bo'shbo'lmasligi kerak").notEmpty(),
   check("lastName", "Maydon bo'shbo'lmasligi kerak").notEmpty(),
   check("phoneNumber", "Telefon raqamini to'liq kiriting").isLength({min:9,max:9}),
   check("school", "Maydon bo'shbo'lmasligi kerak").notEmpty(),
   check("sinf", "Maydon bo'shbo'lmasligi kerak").notEmpty(),
   check("password", "kamida 8 ta belgi bo'lishi kerak").isLength({ min: 8})
], async function (req, res, next) {
   try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({message:"Qilgan so'rovingiz noto'g'ri",errors})
      }
      const { name, lastName, phoneNumber, school, sinf, password } = req.body
      const condidate = await User.findOne({ phoneNumber })
      if (condidate) {
         return res.status(400).json({ message: `${phoneNumber} bunaqa raqamli foidalanuvchi bor` })
      }
      const hashPassword = await bcrypt.hash(password, 8)
      const user = await new User({ name, lastName, phoneNumber, school, sinf, password: hashPassword }).save()
      if (user) {
         res.status(200).json({ message: `Foydalanuvchi ro'hatdan o'tdi` })
      } else {
         res.status(400).json({ message: `Ro'yhatdan o'tishda hatolik` })
      }
   } catch (err) {
      res.send({message:`Serverda hatolik`})
   }
})

module.exports = router;
