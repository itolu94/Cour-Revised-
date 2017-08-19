module.exports = (app) {
    app.get('/api', (req, resp) =>{
        console.log(req.body);
    })
}