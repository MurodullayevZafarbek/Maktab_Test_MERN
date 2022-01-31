const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/',require('./routes/auth'))

const PORT = config.get('port') || 5000

async function start() {
   try {
      await mongoose.connect(config.get('mongoURI'), {

      })
   app.listen(PORT,()=>console.log(`${PORT} port bilan ishga tushdi`))
   }
   catch (e) {
      console.log('Server Error', e.message)
      process.exit(1)
   }
}

start()