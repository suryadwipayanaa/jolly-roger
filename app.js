const express = require('express')
const app = express()
const layout = require('express-ejs-layouts')
const port = 3000

app.use(express.static('public'))

app.use(layout)
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('home',{
    layout : ('layout/main-layout'),
    title : 'Home'
  })
})
app.get('/', (req, res) => {
  res.render('home',{
    layout : ('layout/main-layout'),
    title : 'Home'
  })
})
app.get('/home', (req, res) => {
  res.render('home',{
    layout : ('layout/main-layout'),
    title : 'Home'
  })
})
app.get('/about', (req, res) => {
  res.render('about',{
    layout : ('layout/main-layout'),
    title : 'About'
  })
})
app.get('/course', (req, res) => {
  res.render('course',{
    layout : ('layout/main-layout'),
    title : 'Course'
  })
})
app.get('/blog', (req, res) => {
  res.render('blog',{
    layout : ('layout/main-layout'),
    title : 'Blog'
  })
})
app.get('/contact', (req, res) => {
  res.render('contact',{
    layout : ('layout/main-layout'),
    title : 'Contact'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})