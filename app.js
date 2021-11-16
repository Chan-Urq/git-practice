const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>
{
  res.render("index");
})
app.use((req, res)=>
{
  console.log(req.url);
  res.status(404).render("404", {urlErr: req.url});
})
app.listen(3000, ()=>
{
  console.log("listening to port 3000...")
})

// function spottingDistance(enemyViewRange, concealmentValue, bushValue = 0)
// {
//   var result = enemyViewRange - (((enemyViewRange - 50) * (concealmentValue + bushValue)) / 100);
//   return `You will get spotted at ${result} meters`; 
// }

// console.log(spottingDistance(486, 36));
console.log('Hello world');
