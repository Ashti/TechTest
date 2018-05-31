const {Data} = require('C:/Users/Ashti/Documents/GitHub/TechTest/scripts/models')

module.exports = {
      add(request, response){
            var a = request.body.info;
            var uniqueId = uuid();
            console.log(a)
            try {
                  data = Data.create({id: uniqueId, info: a})
                  console.log("tsddas")
                  response.send("message recieved! " + JSON.stringify(a) + " and your unique ID is " + JSON.stringify(uniqueId));
            } catch (err) {
                  response.status(400).send({
                        error: 'This isn\'t working'
                  })
            }
      }
}
