const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" }
  //...
]

function superbowlWin(objArr){
const yearDesc =  objArr.find(function(obj){
  return obj.result === "W";
})
if (yearDesc){
  return yearDesc.year
}
return undefined
}
superbowlWin(record);