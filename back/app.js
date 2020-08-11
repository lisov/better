const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
app.use('api/auth', require('./routes/auth.route'))
const PORT = process.env.port || 5000
const mongoUri = process.env.mongoUri

async function start() {
  try {
    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    app.listen(PORT, () => console.log(`App has been starter on port ${PORT}...`))
  } catch (e) {
    console.log(`Server Error, ${e.message }`);
    process.exit(1)
  }

}

start()