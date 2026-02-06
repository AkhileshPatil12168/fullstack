 function nameCombiner(arr) {
  let str = arr.reduce((acc, value) => acc + " " + value.name, "");
  return str;
}

 function filterData (arr){
    let result = arr.filter((ele)=> ele.name)
    return result
}

module.exports = {nameCombiner, filterData}


