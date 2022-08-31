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
    res.sendFiles(path.join(__dirname,'./public/notes.html'));
})

app.get('*', (req, res) => {
    res.sendFiles(path.join(__dirname,'./public/notes.html'));
})

app.post('/api/notes', function(req, res,){
    const newnotes = req.body
    newId.id=Date.now()
    const data = fs.readFileSync(req, res,)
    const json = JSON.parse(data)
    json.push(newnotes)
    fs.writeFileSync('./db/db.json', JSON.stringify(json),
    response.send())

});

app.listen(3000, function() {
    console.log('you listen on this port?')
});