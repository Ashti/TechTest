const {Data} = require('C:/Users/Ashti/Documents/GitHub/TechTest/scripts/models')

module.exports = {
      get(req, res){
            Data.findById(req.params.id).then(information => {
                  res.send(information.info)
            })
            //res.sendFile('index.html', { root: 'C:/Users/Ashti/Documents/GitHub/TechTest/scripts'});
            }
      }
