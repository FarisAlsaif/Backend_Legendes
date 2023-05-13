const express = require("express");

const app = express();
const nunjucks = require("nunjucks");


nunjucks.configure(
    'views', {
        autoescape: false,
        express: app
     
      } );
    

app.use(express.json()); 
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`)); 

app.get('/', (req, res) => {
    
    res.render('base.html');

})
app.get('/dashboard', (req, res) => {
    
    res.render('dashboard.html');
})

app.get('/sections', (req, res) => {
    
    res.render('sections.html');
})
app.get('/new_section', (req, res) => {
    
    res.render('create_section.html');
})
app.get('/schedule', (req, res) => {
    
    res.render('schedule.html');
})
app.get('/members', (req, res) => {
    
    res.render('Members.html');
})
app.get('/events', (req, res) => {
    
    res.render('events.html');
})