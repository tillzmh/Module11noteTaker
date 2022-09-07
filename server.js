const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
// const apiRoutes =require("./routes/apiRoutes.js")
// const htmlRoutes = require("./routes/htmlRoutes.js")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
// app.use("/api",apiRoutes);
// app.use("/", htmlRoutes);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
})

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./db/db.json'));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
})

app.post('/api/notes', function(req, res){
        const newnotes = req.body
        const data = fs.readFileSync('./db/db.json')
        const json = JSON.parse(data)
        newnotes.id = Date.now()
        json.push(newnotes);
        fs.writeFileSync('./db/db.json', JSON.stringify(json))
        res.send()
    })

app.listen(process.env.PORT || 3000, function() {
    console.log('you listen on this port?')
})