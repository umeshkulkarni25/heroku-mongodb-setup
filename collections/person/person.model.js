import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let model;
let personSchema = new Schema({
  name:  String
});
try {
  model = mongoose.model('Person');
}
catch(e) {
  model = mongoose.model('Person', personSchema);
}
export default model;
