function spottingDistance(enemyViewRange, concealmentValue, bushValue = 0)
{
  var result = enemyViewRange - (((enemyViewRange - 50) * (concealmentValue + bushValue)) / 100);
  return `You will get spotted at ${result} meters`; 
}

console.log(spottingDistance(450, 22));