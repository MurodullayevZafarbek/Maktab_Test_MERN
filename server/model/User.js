const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   phoneNumber: {
      type: Number,
      required: true,
      unique: true
   },
   school: {
      type: String,
      required: true
   },
   sinf: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   sertificate: [
      {
         type: {
            type: String,
            default: `Bu yerda sertificat bor`
         },
         path: {
            type: String,
         }
      }
   ],
   tests: [
      {
         testName: {
            type: String,
            default:null
         },
         testId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Connnect"
         },
         status: {
            type: Boolean,
            default:false
         }
      }
   ],
   isBan:{
      type: Boolean,
      default:false
   },
   isAdmin: {
      type: Number,
      default:0
   }
})

module.exports = mongoose.model('User',UserSchema)