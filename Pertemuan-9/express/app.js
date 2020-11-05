const express = require('express')

express().listen('3000', () => {
    console.log("server ini berjalan")
})
app.use(express.static('public'));