module.exports = (app) => {
      app.get('/', function(req, res){
            res.sendFile('index.html', { root: path.join(__dirname, './scripts')});
      });

      app.post('/handle', function(request, response){
            var a = request.body;
            var uniqueId = uuid();
            response.send("post World!");
            console.log(a)
            console.log(uniqueId)
      });
}
