const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const Uer = require('../modules/User')
const {check,validationResult} = require('express-validator')
const router = Router()

router.post(
   '/register',
   [
      check("email", "Noto'g'ri email").isEmail(),
      check("password", "Kamida 6 ta simvol").
         isLength({min:6}),
   ],
   async (req, res) => {
   try {
      const error = await validationResult(req)

      if (error.isEmpty()) {
         return res.status(400).json({
            errors: errors.array(),
            message:"Nomaqul malumotlar registrda"
         })
      }

      const { email, password } = req.body
      
      const condidate = await User.findOne({ email })
      
      if (condidate) {
         return res.status(400).json({ message: "Bunday foyidalanuvchi ro`yhatdan o`tgan"})
      }
      
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, password: hashedPassword })
      
      await user.save()
      res.status(201).json({ message: "Foydalanuvchi ro`yhatdan o`tdi"})
   }
   catch (e) {
      res.status(500).json({message: "NImadirda xatolik bor"})
   }
})
router.post(
   '/login',
   [
      check('email', "To'g'ri email kiriting").normalizeEmail().isEmail(),
      check('password', "To'g'ri Parol kiriting").exists()
   ],
   async (req, res) => {
   try {
      const error = await validationResult(req)

      if (error.isEmpty()) {
         return res.status(400).json({
            errors: errors.array(),
            message:"Nomaqul malumotlar registrda Kirishda"
         })
      }   

      const { email, password } = req.body
      
      const user = await User.findOne({ email })
      
      if (!user) {
         return res.status(400).json({ message: "Foyidalanuvchi topilmadi"})
      }
      
      const isMatch = await bcrypt.compare(password, User.password)

      if (!isMatch) {
         return res.status(400).json({message: "Parol noto`g`ri terildi qaytadan urinib ko`ring"})
      }

      const token = jwt.sign(
         { userId: user.id },
         config.get('jwtSecret'),
         {expiresIn: '1h'},
      )

      res.json({token,userId:user.id})
   }
   catch (e) {
      res.status(500).json({message: "NImadirda xatolik bor"})
   }
})
module.exports = router