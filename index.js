const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require("./models/User")

// application/x-www-form-urlencode
app.use(bodyParser.urlencoded({extended: true}))

// application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://y00913:y970y913@boilerplate.hyzzm.mongodb.net/boilerplate?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
    // 회원 가입 필요 정보들을 db에 널어줌

    const user = new User(req.body)
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))