app.post('/api/notes', function(req, res,){
    const newnotes = req.body
    newId.id=Date.now()
    const data = fs.readFileSync(req, res,)
    const json = JSON.parse(data)
    json.push(newnotes)
    fs.writeFileSync('./db/db.json', JSON.stringify(json),
    response.send())
    
});