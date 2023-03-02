const express = require('express')

const app = express();

// register view engine
app.set('view engine', 'ejs');


app.listen(3000);

app.get('/', (req, res)=>{
    const blogs = [
        {title: 'Fred finds Money', snippet:"Lorem ipsum"},
        {title: 'Kim finds Jobs', snippet:"Lorem ipsum"},
        {title: 'Commando', snippet:"Lorem ipsum"},
    ];
    // res.send('<p>Home Page</p>');
    res.render('index', {title: "Home", blogs});
})
app.get('/about', (req, res)=>{
    // res.send('<p>About Page</p>');
    res.render('about', {title: "About"})
})

app.get('/blogs/create',(req, res)=>{
    res.render('create', {title: "Create"})
})

// 404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: "404"})
})