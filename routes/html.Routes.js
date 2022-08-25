app.get('/notes', (req, res) => {
    res.sendFiles(path.join(__dirname,'./public.notes.html'));
})

app.get('*', (req, res) => {
    res.sendFiles(path.join(__dirname,'./public.notes.html'));
})