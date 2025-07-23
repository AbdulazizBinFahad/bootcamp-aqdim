const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let usersData = [
    {name: "Abdulaziz", age: 30, job: "Dev", email: "abdulaziz@test.com"},
    {name: "Ali", age: 20, job: "Dev", email: "ali@test.com"},
    {name: "Ahmed", age: 25, job: "Dev", email: "ahmed@test.com"},
]

app.get('/users/:userId/books/:bookId', (req, res) => {
    try{
        const { userId, bookId } = req.params

        if(Number(userId) >= 0 || Number(bookId) >= 0){
            res.send(`userId: ${userId} , bookId: ${bookId}`)
        }
    }catch(err){
        console.log(err)
        res.send(`something went wrong`)
    }
    
})

app.get('/users/', (req, res) => {
    res.send({
        status: 200,
        total: usersData.length,
        users: usersData
    })
})

app.post('/users/:name/:age/:job/:email', (req, res) => {
    const {name, age, job, email} = req.params

    usersData.push({
        name: name,
        age: age,
        job: job,
        email: email
    })

    res.send(`User added`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})