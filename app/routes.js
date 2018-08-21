var express = require('express');
let ejs = require('ejs');

var router = express.Router();

module.exports = router;

// Home and Blog routes (basic)
router.get('/', (req, res) => {
    res.render('pages/index')
});

router.get('/blog1', (req, res) => {
    res.render('pages/blog1')
});

router.get('/blog2', (req, res) => {
    res.render('pages/blog2')
});

router.get('/blog3', (req, res) => {
    res.render('pages/blog3')
});

// Riot and API routes (advanced)
router.get('/riot', (req, res) => {
    res.render('pages/riot')
});

router.get('/riot/:name', (req, res) => {
    res.render('pages/riot', {
        output: req.params.name
    })
})

router.post('/riot/submit', (req, res) => {
    //console.log(req);
    var name = req.body.summoner_name;
    res.redirect('/riot/' + name);
})

// Miscellaneous 
router.get('/documents/Resume.pdf', (req, res) => {
    res.sendFile('/documents/Resume.pdf', {
        root: './'
    })
});