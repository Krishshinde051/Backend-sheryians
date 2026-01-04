const express = require('express')
const app = express()

app.use((req,res,next) => {
    console.log('middleware chala')
    next()
});

app.get('/',(req,res) => {
    res.send('This is home page')
})

app.get('/feed',(req,res) => {
    res.send('This is a feed page')
})

app.get('/contact',function(req,res,next ){
    return next(new Error('not implemented'))
})

app.use((err, req, res, next) => {
  console.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).send('Something wrong')
  console.log("hii")
});


app.listen(3000)
