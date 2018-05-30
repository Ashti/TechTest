const {data} = ('C:/Users/Ashti/Documents/GitHub/TechTest/scripts/models')

module.exports = {
      async add(request, response){
            var a = request.body;
            var uniqueId = uuid();
            console.log(a)
            const addData = await data.create({
                  id: uniqueId,
                  info: req.body.a
            })
            console.log("tsddas")
            response.send("message recieved! " + JSON.stringify(a) + " and your unique ID is " + JSON.stringify(uniqueId) + data.toJSON());
            //}
            //catch (err) {
            //      response.status(400).send({
            ///            error: 'Something ain\'t worked out'
            //      })
            }
            }
      //}
