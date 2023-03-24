// 실행=> node index.js
// 수정을 감지해서 재실행
// 실행=> nodemon index.js
//const nodemon = require('nodemon')

const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    res.send('hello')
})

app.post('/', async (req, res) => {
    res.send('hello')
})

app.delete('/', async (req, res) => {
    res.send('hello')
})

app.listen(4000, ()=>{
    console.log("ready")
})