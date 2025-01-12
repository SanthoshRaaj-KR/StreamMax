import express from 'express';
import axios from 'axios';
import qs from 'qs';
import path from 'path';

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
