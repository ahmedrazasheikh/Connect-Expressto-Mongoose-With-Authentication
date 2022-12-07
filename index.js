import express from 'express';
const app = express()
const port = process.env.PORT || 8000
import Database from './dataBase.js'
// const dataBase = process.env.dataBase || 
// 'mongodb://hello_admin:hello123@0.0.0.0:27017/rtm?authSource=rtm'
const dataBase = process.env.dataBase || 'mongodb://0.0.0.0:27017/rtm'
Database(dataBase)
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})