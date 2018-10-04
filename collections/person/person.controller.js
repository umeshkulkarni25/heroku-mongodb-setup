import model from './person.model';
import personList from './personList';

const getPersonList = () => {
    return model.find({},{name:1, _id:0});
}
const createPersonList = async () =>{
  try{
    await model.deleteMany({});
    let results = await model.create(personList);
    console.log(results)
  }catch(err){
    console.log(err);
  }
}

export default {
  getPersonList,
  createPersonList
}
