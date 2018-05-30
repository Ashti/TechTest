const addDataController = require('C:/Users/Ashti/Documents/GitHub/TechTest/scripts/controllers/addDataController')
const getDataController = require('C:/Users/Ashti/Documents/GitHub/TechTest/scripts/controllers/getDataController')

module.exports = (app) => {
      app.get('/',
            getDataController.get
            //res.sendFile('index.html', { root: path.join(path.resolve(), 'scripts')});
      );

      app.post('/',
            addDataController.add
      );
}
