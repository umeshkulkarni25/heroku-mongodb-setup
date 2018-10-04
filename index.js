import express from 'express';
import './db';
import personController from './collections/person/person.controller';
let app = express();

app.get('/getPeople', async (req, res)=>{
  let people;
  try{
    people = await personController.getPersonList();
  }catch(err){
    people = err;
  }
  res.json(people);
});
app.listen(3000, (err) => {
  if(err){
    console.log(err);
    return;
  }
  console.log('server started!!! checkout this url --> http://localhost:3000/names')
});
