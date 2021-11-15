const http = require("http");
const server = http.createServer((req, res)=>
{
  console.log(req);
})
server.listen(3000, ()=>
{
  console.log("listening to port 3000...")
})

// function spottingDistance(enemyViewRange, concealmentValue, bushValue = 0)
// {
//   var result = enemyViewRange - (((enemyViewRange - 50) * (concealmentValue + bushValue)) / 100);
//   return `You will get spotted at ${result} meters`; 
// }

// console.log(spottingDistance(486, 36));