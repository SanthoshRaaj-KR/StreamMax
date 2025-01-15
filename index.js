import express from 'express';
import axios from 'axios';
import qs from 'qs';
import path from 'path';
import { start } from 'repl';

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", async (req,res)=>{
  try{
    const result=await axios.get("https://ott-details.p.rapidapi.com/advancedsearch",{params:{
      start_year:'2000',
      min_imdb:'6',
      type:'movie',
      language:'english',
    },
    headers:{
      'x-rapidapi-key': '63fa050d33mshbc7ee4ca45209a4p1e7207jsn4a92ba421bdd',
      'x-rapidapi-host': 'ott-details.p.rapidapi.com'
    }
    });
    res.render("index.ejs",{content:result.data});
  }
  catch(error){
    console.log(error.message);
    res.status(503).send({error:"Sorry the Service is temporarily unavailable.Please try again after few minutes"});
  }
});

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
