import mongoose from 'mongoose';
import personController from './collections/Person/person.controller';
mongoose.connect('mongodb://root:qwerty123@ds123003.mlab.com:23003/heroku-connection-test');
let db = mongoose.connection;
db.on('error', (err)=>{
  console.log(err);
  process.exit(1);
});
db.once('open', function() {
  console.log('connected to ds123003.mlab.com:23003/heroku-connection-test');
  personController.createPersonList();
});