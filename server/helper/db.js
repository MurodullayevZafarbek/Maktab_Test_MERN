const mongoose = require('mongoose')

module.exports = start = () => {
   try {
      mongoose.connect(process.env.DB_URL)
         .then(() => {
         console.log("Mogoga ofline ulandik")
      })
   } catch (e) {
      
   }
}