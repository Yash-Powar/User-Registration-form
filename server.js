const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodypaser = require('body-parser')
const path = require('path')


const app = express()


dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080


//log request

app.use(morgan('tiny'));



//parse request to body parser

app.use(bodypaser.urlencoded({ extended: true }))


//set view engine

app.set("view engine", "ejs")


//load assets

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.get('/', (req, res) => {
    // res.send("Crud Application ");
    res.render('index')
})

//route for adding user into form

app.get('/add-user', (req, res) => {

    res.render('add_user')
})

//route for updating user 

app.get('/update-user', (req, res) => {

    res.render('update_user')
})


app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
})