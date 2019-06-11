require('./hbs/helpers')

const port = process.env.PORT || 3000;
const express = require('express')
const app = express()
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



app.get('/',  (req, res) => {   
  res.render('home', {
      name : 'sAntiago viLLAlobos'
  })
})

app.get('/about',  (req, res) => {   
    res.render('about')
  })

app.listen(port, () => console.log(`Listening through ${port}`))