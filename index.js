import '@babel/polyfill'
import express from 'express';
import './db';
import personController from './collections/person/person.controller';
let port = process.env.PORT||3000;
let app = express();

app.get('/', async (req, res)=>{
  let people;
  try{
    people = await personController.getPersonList();
  }catch(err){
    people = err;
  }
  res.json(people);
});
app.listen(port, (err) => {
  if(err){
    console.log(err);
    return;
  }
  console.log('server started!!!')
});
