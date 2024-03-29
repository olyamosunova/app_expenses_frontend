const express = require('express')

const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (request: any, response: any) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)

export {}
