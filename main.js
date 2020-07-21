function createMultiplyTable(start, end) {
  if(isValid(start,end)){
    return generateMultiplyTable(start,end);
  }
  return null;
}
function isValid(start,end){
  if(start >= end){
    return false;
  }else if(start > 1000 || start < 1 || end > 1000 || end < 1){
    return false;
  }
  return true;
}

function generateMultiplyTable(start,end) {
  var result = "";
  for (let i = start; i <= end; i++) {
    for (let j = start; j <= i; j++) {
      if(j!=i){
        result += j+"*"+i+"="+(j*i)+"\t";
      }else{
        result += j+"*"+i+"="+(j*i);
      }
       
    }
    if(i != end){
      result += "\n";
    }
    
  }
  return result;
}

module.exports = {
  createMultiplyTable,
};
